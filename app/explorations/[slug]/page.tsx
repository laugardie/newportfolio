import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { explorations } from "@/content/explorations";

function renderTextContent(content: string) {
  const html = content.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">$1</a>',
  );

  return { __html: html };
}

export async function generateStaticParams() {
  return explorations.map((e) => ({ slug: e.slug }));
}

type Props = {
  params: { slug: string };
};

export default function ExplorationPage({ params }: Props) {
  const exploration = explorations.find((e) => e.slug === params.slug);
  if (!exploration) notFound();

  const others = explorations
    .filter((e) => e.slug !== exploration.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-[560px] mx-auto px-6 sm:px-8 md:px-0 pt-20 pb-36">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            ←
          </span>
          <span>explorations</span>
        </Link>

        {/* Title */}
        <h1 className="text-2xl font-medium leading-tight tracking-tight text-ink mb-2">
          {exploration.name}
        </h1>

        {/* Meta */}
        <p className="text-sm text-muted mb-10">
          {exploration.company} · {exploration.year}
        </p>

        {/* Description */}
        <p
          className="text-base leading-[1.75] text-ink mb-16"
          dangerouslySetInnerHTML={renderTextContent(exploration.description)}
        />

        {/* Sections */}
        <div className="space-y-14">
          {exploration.sections.map((section, i) => {
            if (section.type === "image") {
              return (
                <figure key={i} className="-mx-16">
                  <div className="rounded-2xl overflow-hidden bg-surface">
                    <Image
                      src={section.content}
                      alt={section.caption ?? ""}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="object-cover"
                    />
                  </div>
                  {section.caption && (
                    <figcaption className="text-center text-xs text-muted mt-3">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-base font-semibold text-ink mb-3">
                    {section.heading}
                  </h2>
                )}
                <p
                  className="text-base leading-[1.75] text-ink"
                  dangerouslySetInnerHTML={renderTextContent(section.content)}
                />
              </div>
            );
          })}
        </div>

        {/* More explorations */}
        {others.length > 0 && (
          <div className="mt-20 pt-16 border-t border-divider">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted mb-5">
              More explorations
            </p>
            <div>
              {others.map((e) => (
                <Link
                  key={e.slug}
                  href={`/explorations/${e.slug}`}
                  prefetch={false}
                  style={{ textDecoration: "none" }}
                >
                  <div className="row-item group flex items-baseline justify-between py-2.5 -mx-2 px-2 border-b border-divider">
                    <div className="flex items-baseline justify-between w-full transition-transform duration-200 ease-out group-hover:translate-x-1">
                      <div className="flex items-baseline gap-1.5 min-w-0 mr-4">
                        <span className="text-sm text-ink">{e.name}</span>
                        <span className="text-sm text-ink/50 flex-shrink-0">
                          · {e.company}
                        </span>
                      </div>
                      <span className="text-xs text-ink/50 group-hover:text-ink/80 transition-colors duration-200 tabular-nums flex-shrink-0">
                        {e.year}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
