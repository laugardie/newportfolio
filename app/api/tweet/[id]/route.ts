import { NextResponse } from "next/server";
import { getTweet } from "react-tweet/api";

// Serves tweet data from our own origin, so the Resend page shows tweets even where Twitter's
// widget script is blocked (Brave Shields, ad blockers).
// Twitter's syndication API now sends `entities: {}`, and react-tweet expects every list to be there.
type Entities = Record<string, unknown[] | undefined>;
const withEntities = <T extends { entities?: unknown; quoted_tweet?: { entities?: unknown } }>(tweet: T): T => {
  const fill = (e: unknown) => {
    const entities = (e ?? {}) as Entities;
    for (const key of ["hashtags", "urls", "user_mentions", "symbols"]) entities[key] ??= [];
    return entities;
  };
  tweet.entities = fill(tweet.entities);
  if (tweet.quoted_tweet) tweet.quoted_tweet.entities = fill(tweet.quoted_tweet.entities);
  return tweet;
};

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const tweet = await getTweet(params.id);
    return NextResponse.json({ data: tweet ? withEntities(tweet) : null }, { status: tweet ? 200 : 404 });
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
}
