"use client";

import { Tweet } from "react-tweet";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

// `openable` cards have a sheet with more context behind them.
// The sheet opens with a quiet line of facts and, when the sections don't say it themselves, what the
// project is (`name` + `intro`).
type About = { name?: string; intro?: string; kind: string; meta: string[] };
// A tile shows a piece of work on a grey card with a short caption under it, a light pass rather than
// a case study. Its images are 2x exports shown at their natural size; `wide` spans two columns, as
// tall as the others at 11:4. A `full` tile is a whole screen: it spans the row and sets the screen in
// the card at the row's width. A tile with no images yet shows a placeholder.
type Tile = { name: string; note?: string; images: string[]; wide?: boolean; full?: boolean; bottom?: boolean };
// Every page reads the same way: a few short sections, each with an optional heading and paragraph of
// context followed by the work that shows it.
type Section = { heading?: string; body?: string; tiles: Tile[] };
// A story reads like a written case study, a lighter take on it: short passages of text in a narrow column,
// each followed by the work at full width or two side by side. `bleed` is for images that are finished
// compositions with their own background, so they fill the card instead of sitting on it. A figure with
// no image yet shows a placeholder with its `note`, saying what goes there. A `tweet` figure embeds the post
// at that URL instead of an image. `plain` is for images that already carry a frame and shadow, so they sit
// on the page with no card at all.
type Figure = { image?: string; tweet?: string; caption: string; bleed?: boolean; plain?: boolean; note?: string };
type Passage = { heading: string; body?: string[]; points?: [string, string][] };
type Block = Passage | { figures: Figure[] };
type Card = {
  title: string;
  body: string;
  image?: string;
  openable?: boolean;
  about?: About;
  sections?: Section[];
  story?: Block[];
};

const CARDS: Card[] = [
  {
    title: "From Seville to Lagos.",
    body: "Born and raised in Seville, Spain. Now calling Lagos, Portugal home.",
    image: "/assets/resend-seville.jpg",
  },
  {
    title: "Not very good at sitting still.",
    body: "CrossFit, running, kettlebells, yoga… you name it.",
    image: "/assets/resend-yoga.jpg",
  },
  {
    title: "Cooking is my happy place.",
    body: "Trying new recipes is one of my favorite ways to switch off.",
    image: "/assets/resend-cooking.jpg",
  },
  {
    title: "I love making things.",
    body: "Not just apps! My latest project was an astronaut helmet for my son.",
    image: "/assets/resend-astronaut.jpg",
  },
  {
    title: "From teaching to design.",
    body: "Before getting into design, I was actually a primary school teacher for four years.",
    image: "/assets/resend-liferay.jpg",
  },
  {
    title: "Lexicon, Liferay’s design system.",
    body: "My first job as a designer was at Liferay, where I worked on Lexicon, their design system.",
    image: "/assets/resend-lexicon.jpg",
    openable: true,
    about: {
      name: "Icons and Components.",
      intro: "Designing, refining, and documenting the building blocks of a design system.",
      kind: "Liferay / Lexicon",
      meta: ["Design System Designer", "Oct 2019 – Jun 2020"],
    },
    // Three columns: wide tiles take two, alternating sides so the rows don't stack the same way.
    sections: [
      {
        tiles: [
          {
            name: "Text editor toolbar",
            note: "Formatting controls for Liferay’s rich text editor.",
            images: ["/assets/lexicon/toolbar.png"],
            wide: true,
          },
          { name: "Labels", note: "Status labels in every semantic colour.", images: ["/assets/lexicon/labels.png"] },
          { name: "Menus", note: "Menu items with icons and shortcuts.", images: ["/assets/lexicon/menu.png"] },
          {
            name: "Dual Listbox",
            note: "Moving items between two lists.",
            images: ["/assets/lexicon/dual-listbox.png"],
            wide: true,
          },
          {
            name: "Modals",
            note: "Dialogs with a clear primary action.",
            images: ["/assets/lexicon/modal.png"],
            wide: true,
          },
          {
            name: "Toasts",
            note: "Confirming an action and offering the next.",
            images: ["/assets/lexicon/toast.png"],
          },
          {
            name: "Action buttons",
            note: "Colour-coded buttons for each kind of action.",
            images: ["/assets/lexicon/action-buttons.png"],
          },
          {
            name: "Icon buttons",
            note: "Borderless buttons and their states.",
            images: ["/assets/lexicon/icon-buttons.png"],
          },
          { name: "Keys", note: "Keyboard keys, light and dark.", images: ["/assets/lexicon/keys.png"] },
          { name: "Shortcuts", note: "Tooltips that teach the keyboard.", images: ["/assets/lexicon/shortcut.png"] },
          { name: "Icons", note: "Part of the icon set.", images: ["/assets/lexicon/icons.png"], wide: true },
        ],
      },
    ],
  },
  {
    title: "Beezy, intranets for Microsoft 365.",
    body: "Next came Beezy, where I designed Theater mode, a way to view and discuss any file without leaving the page.",
    image: "/assets/resend-beezy.jpg",
    openable: true,
    about: {
      name: "Theater mode.",
      intro:
        "A way to view and discuss any file without leaving the page. I left Beezy before it shipped, so this is the design as I handed it off.",
      kind: "Beezy",
      meta: ["Product Designer", "Jun 2020 – Aug 2021"],
    },
    story: [
      { figures: [{ image: "/assets/beezy/theatre-hero.jpg", caption: "Theater mode, open on a PDF.", bleed: true }] },
      {
        heading: "The problem",
        body: [
          "People had to download files just to read them. Then switch windows to comment. Then switch back. The kind of friction that adds up quietly, until everyone just stops engaging.",
        ],
      },
      {
        heading: "The idea",
        body: [
          "A modal that lets you view anything, documents, images, videos or PDFs, without leaving the page. Comment in real time, react, flip through attachments. Stay in the flow.",
        ],
      },
      {
        figures: [
          { image: "/assets/beezy/theatre.png", caption: "The file on the left, the conversation on the right." },
        ],
      },
      {
        heading: "What I designed",
        points: [
          ["One modal, every file type.", "Images, docs, videos and PDFs, all handled the same way."],
          ["Side-by-side comments.", "Content on the left, conversation on the right. No context switching."],
          ["Content thumbnails.", "Everything attached in a row, to jump between files without hunting."],
          ["Distraction-free mode.", "Hide the comments, and it's just you and the content."],
        ],
      },
      {
        figures: [
          { image: "/assets/beezy/file-types.png", caption: "One modal for every kind of file." },
          { image: "/assets/beezy/comments.png", caption: "From the first comment to a live conversation." },
        ],
      },
      {
        figures: [
          { image: "/assets/beezy/thumbnails.png", caption: "Every attachment in a row." },
          { image: "/assets/beezy/focus.png", caption: "Comments hidden, just the content." },
        ],
      },
      {
        heading: "What I learned",
        body: [
          "Two weeks is not a lot of time. You get very good at cutting scope quickly. The features that made it in were the ones that solved the actual problem, everything else waited.",
        ],
      },
    ],
  },
  {
    title: "Gumroad, almost five years.",
    body: "Then Gumroad, designing the tools creators use to sell their work online.",
    image: "/assets/resend-gumroad.jpg",
    openable: true,
    about: { name: "Tipping.", intro: "Adding tips to Gumroad's checkout.", kind: "Gumroad", meta: [] },
    story: [
      { figures: [{ image: "/assets/tipping/custom-tip-2.png", caption: "Tipping in Gumroad's checkout today." }] },
      {
        heading: "Asked, then shipped",
        body: ["We asked creators on Twitter, and yes won. Three days later, tipping was live."],
      },
      {
        figures: [
          { tweet: "https://twitter.com/gumroad/status/1822260682198311396", caption: "Live on August 10, 2024." },
        ],
      },
      {
        heading: "Explorations",
        body: ["Before that, we looked at a few ways in:"],
        points: [
          ["A coffee product", "added to every cart."],
          ["Interstitial screen", "after clicking Pay."],
          ["A tip for each creator,", "right above Pay."],
          ["One tip right above Pay.", "The one we built."],
        ],
      },
      {
        figures: [
          { image: "/assets/tipping/coffee-product-2.png", caption: "Discarded: a coffee product added to the cart." },
          { image: "/assets/tipping/interstitial-3.png", caption: "Discarded: a separate screen after clicking Pay." },
        ],
      },
      {
        figures: [
          {
            image: "/assets/tipping/multiple-creators-3.png",
            caption: "Explored: a separate tip for each creator, above Pay.",
          },
          {
            image: "/assets/tipping/first-launch-2.png",
            caption: "Shipped: one tip, split across the cart by each product's price.",
          },
        ],
      },
      {
        heading: "What happened",
        body: ["In the first days, we tried both defaults, and 20% stayed:"],
        points: [
          ["≈4.5% more GMV", "with 20% preselected."],
          ["≈0.7% more GMV", "with no tip preselected."],
          ["Many creators weren't comfortable", "with how tipping was presented to their customers."],
          ["Others were delighted", "by their first tips."],
          ["Some thought", "it was a bug."],
        ],
      },
      {
        figures: [
          { tweet: "https://twitter.com/strzibnyj/status/1827539962583249026", caption: "Tips, mistaken for a bug." },
        ],
      },
      {
        heading: "Second release",
        body: [
          "We talked it through and agreed that listening to creators mattered more than maximising the lift. In January 2025 we made “No tip” the default, knowing it meant giving up most of the lift:",
        ],
        points: [["A healthier UX.", ""]],
      },
      {
        heading: "Moving the tip, a year later",
        body: ["I designed changes based on feedback, and reviewed the PR:"],
        points: [
          ["Next to the total.", "Above Pay, you had to look back left to see what you'd pay."],
          ["No jumps.", "A “Tip” line used to appear in the summary only once you picked one."],
          ["“No tip” instead of 0%.", ""],
          ["15, 20 and 25%,", "so the middle options feel fair."],
        ],
      },
      {
        figures: [
          { image: "/assets/tipping/first-launch-2.png", caption: "Before: the tip right above Pay." },
          { image: "/assets/tipping/custom-tip-2.png", caption: "After: the tip inside the order summary." },
        ],
      },
      {
        heading: "Then the payment form",
        body: ["At the same time, I redesigned the rest of the payment form and built it myself:"],
        points: [["Payment method above Pay.", "Contact details first, then how you pay."]],
      },
      { figures: [{ image: "/assets/tipping/payment-4.png", caption: "Payment form.", bleed: true }] },
      {
        heading: "Looking back",
        points: [
          ["Ship fast, then listen.", "The data said keep 20%, creators said otherwise, and we listened."],
          ["Come back to it.", "A year later, the details: the jump, the total, the labels."],
          ["Close to engineering.", "Sometimes I review the PR, sometimes I open it myself."],
        ],
      },
    ],
  },
  {
    title: "Flexile.",
    body: "Alongside Gumroad, I helped design Flexile, a product to pay contractors and manage equity.",
    image: "/assets/resend-flexile.jpg",
    openable: true,
    about: {
      name: "GitHub integration.",
      intro: "Bringing GitHub into Flexile, so nobody has to check pull requests by hand.",
      kind: "Flexile",
      meta: [],
    },
    story: [
      {
        figures: [{ image: "/assets/flexile/hero-3.png", caption: "An invoice, as an admin reviews it.", bleed: true }],
      },
      {
        heading: "What used to be done by hand",
        body: ["Once the company and the contractor connect GitHub, Flexile checks on its own:"],
        points: [
          ["Who owns the pull request,", "and whether it's merged."],
          ["The amount,", "from the bounty label on GitHub."],
          ["Whether it was already paid,", "so nothing gets paid twice."],
        ],
      },
      {
        heading: "Connecting both sides",
        body: [
          "The company connects it once, in Integrations, to verify pull requests and bounty claims. Contractors don't need to go looking for it: the moment they paste a pull request from Antiwork, the invoice tells them they can connect GitHub.",
        ],
      },
      {
        figures: [
          {
            image: "/assets/flexile/company-integrations-5.png",
            caption: "The company connects it in Integrations.",
            bleed: true,
          },
          {
            image: "/assets/flexile/contractor-github-alert-5.png",
            caption: "Contractors find out when they paste a pull request.",
            bleed: true,
          },
        ],
      },
      {
        heading: "Pasting a pull request",
        body: [
          "A contractor pastes a pull request link, and the line turns into the repo, the title and the bounty. While the pull request loads, the line says so, and if GitHub doesn't answer, there's a retry.",
        ],
      },
      {
        figures: [
          { image: "/assets/githubintegration.mp4", caption: "Writing an invoice, as a contributor.", bleed: true },
        ],
      },
      {
        heading: "From labels to a dot",
        body: ["Every pull request had a label. Now only the ones that need a look get a dot:"],
        points: [
          ["Already paid", "on another invoice."],
          ["Not by the person invoicing,", "or they're only a co-author."],
          ["The amount doesn't match", "the bounty label."],
        ],
      },
      {
        figures: [
          {
            image: "/assets/flexile/invoice-labels-3.png",
            caption: "Before: a label on every pull request.",
            bleed: true,
          },
          { image: "/assets/flexile/invoice-dots-3.png", caption: "After: a dot only where it's needed.", bleed: true },
        ],
      },
      {
        heading: "The card behind the dot",
        body: [
          "The card holds everything about the pull request: title, author, status and whether it was already paid. On hover it waits a moment before opening, so it doesn't keep popping up as your cursor crosses the invoice. On mobile there's no hover, so a long press opens it, like on GitHub.",
        ],
      },
      { figures: [{ image: "/assets/flexile/cards-7.png", caption: "The card in four states.", bleed: true }] },
      {
        heading: "“A game changer”",
        body: [
          "Admins no longer check every pull request by hand, only the ones with a dot. The admins, the CEO and part of the team, told us in Slack it was a game changer. Contributors shared theirs in our Telegram group.",
        ],
      },
    ],
  },
];

// Openable cards read as chapters: "01 / 04".
const CHAPTERS = CARDS.filter((c) => c.openable);

const EASE = [0.215, 0.61, 0.355, 1] as const;

// Where a card sits relative to the active one: 0 is centre, ±1 beside it, ±2 at the edges, the rest hidden.
function offsetOf(i: number, active: number) {
  const half = Math.floor(CARDS.length / 2);
  return ((i - active + half + CARDS.length) % CARDS.length) - half;
}

// The card's side, matching h/w-[min(24rem,60vw)].
function cardSize(vw: number) {
  return Math.min(384, vw * 0.6);
}

// How wide a turned card looks, as a share of the focused one's side. Measured in the browser: the
// turn foreshortens it but the perspective brings its near edge forward again, about the same for both.
const TURNED_SEEN = 0.76;

// Positions are in px from the centre; `vw` is the viewport width. The visible gaps between cards
// are all the same, sized so the outer cards land on the edge of the screen, cut in half, so it
// reads as more to come. On narrow screens the gap keeps a minimum and the outer cards come in.
function placement(offset: number, vw: number) {
  const d = Math.abs(offset);
  const side = Math.sign(offset);
  const card = cardSize(vw);
  const near = card * TURNED_SEEN;
  const far = card * TURNED_SEEN;
  const gap = Math.max(16, (vw / 2 - card / 2 - near - far / 2) / 2);
  const x1 = card / 2 + gap + near / 2;
  if (d === 0) return { x: 0, scale: 1, rotateY: 0, opacity: 1, filter: "blur(0px)", zIndex: 3 };
  if (d === 1)
    return { x: side * x1, scale: 0.74, rotateY: side * -32, opacity: 0.9, filter: "blur(1.5px)", zIndex: 2 };
  if (d === 2)
    return {
      x: side * (x1 + near / 2 + gap + far / 2),
      scale: 0.6,
      rotateY: side * -52,
      opacity: 0.55,
      filter: "blur(6px)",
      zIndex: 1,
    };
  // Anything further out is tucked away past the edges.
  return { x: side * (vw / 2 + card), scale: 0.5, rotateY: side * -60, opacity: 0, filter: "blur(8px)", zIndex: 0 };
}

function RoundButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-200 hover:bg-[color:var(--color-row-hover)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-surface"
    >
      {children}
    </button>
  );
}

// Tweets render from data our own /api/tweet route fetches, not Twitter's widget script, which Brave
// and ad blockers block.
function TweetEmbed({ url }: { url: string }) {
  const id = url.split("/").pop() ?? "";
  return (
    <div data-theme="light" className="flex w-full justify-center [&_.react-tweet-theme]:!my-0">
      <Tweet id={id} apiUrl={`/api/tweet/${id}`} />
    </div>
  );
}

// A video in a story waits on its first frame until it's played, so it starts when the talk gets to
// it. Clicking it, or its button, plays or pauses it; it loops, muted.
function StoryVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };
  return (
    <div className="relative w-full">
      <video
        ref={ref}
        src={src}
        preload="auto"
        muted
        loop
        playsInline
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={`cursor-pointer ${className}`}
      />
      <button
        type="button"
        aria-label={playing ? "Pause video" : "Play video"}
        onClick={toggle}
        className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_2px_8px_rgba(0,0,0,0.12)] backdrop-blur transition-colors duration-200 hover:bg-white"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
            <rect x="2.5" y="1.5" width="3" height="11" rx="1" />
            <rect x="8.5" y="1.5" width="3" height="11" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
            <path d="M3.5 2.2v9.6a.8.8 0 0 0 1.2.7l7.6-4.8a.8.8 0 0 0 0-1.4L4.7 1.5a.8.8 0 0 0-1.2.7Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

// Opening a card is one movement: the page grows out of the card while its logo travels into the
// page's header, then the content settles in. Closing, the page fades out while the logo grows back
// into the card. Both ride a spring with no bounce, so they arrive and leave like something
// physical. The rest thresholds are tight because the logo swaps with the real card when it settles.
const OPEN_S = 0.5;
const CLOSE_S = 0.4;
const spring = (s: number) => ({
  type: "spring" as const,
  visualDuration: s,
  bounce: 0,
  restDelta: 0.0005,
  restSpeed: 0.001,
});
// On the way in the logo holds its size for a moment, so it reads as the card lifting off the page,
// then lands ahead of the page so the content never comes in under it.
const LOGO_HOLD = 0.08;
const LOGO_LAND = 0.8;

type Rect = { x: number; y: number; size: number };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Moving between projects on the page: the old one leaves the way you're going, the new one comes in.
const slide = {
  enter: (dir: number) => ({ x: 48 * dir, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: EASE } },
  exit: (dir: number) => ({ x: -48 * dir, opacity: 0, transition: { duration: 0.16, ease: "easeIn" as const } }),
};

// The page's content follows the page in, one block after another, so it's never empty for long.
const content = {
  hidden: { opacity: 0, y: 12, transition: { duration: 0.12 } },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE, delay: OPEN_S * 0.4 + i * 0.05 },
  }),
};

export default function ResendDeck() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  // `entered` sends the other cards away; `paged` keeps the page up until it has shrunk back.
  const [entered, setEntered] = useState(false);
  const [paged, setPaged] = useState(false);
  // The logo has reached the header: the in-page copy takes over, so it scrolls with the page.
  const [landed, setLanded] = useState(false);
  // Going home straight from a page: the page fades away while the avatar grows back, and the
  // carousel behind it leaves at once, unseen.
  const [homing, setHoming] = useState(false);
  const [vw, setVw] = useState(1440);
  // The intro stagger should only play once, not on every step.
  const [introDone, setIntroDone] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLElement>(null);
  // On the page, the neighbouring projects peek in from the edges and ←/→ move between them.
  const [dir, setDir] = useState(1);
  const [peek, setPeek] = useState(0);
  // The image opened full screen from a page, to see the work up close.
  const [zoom, setZoom] = useState<string | null>(null);
  // The peek sits level with the mouse, so it can be clicked where it shows up, and trails it a little.
  const peekY = useSpring(0, { stiffness: 400, damping: 40 });
  const followPeek = (e: React.MouseEvent<HTMLElement>, jump = false) => {
    const box = e.currentTarget.getBoundingClientRect();
    const y = Math.min(box.height - 64, Math.max(64, e.clientY - box.top));
    if (jump) peekY.jump(y);
    else peekY.set(y);
  };
  // After the first project, the content comes in with the slide rather than its own stagger.
  const switched = useRef(false);
  const reduce = useReducedMotion();
  // A zoomed image grows out of its place on the page and settles back into it, like a photo in Photos.
  const zoomMotion = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 300, damping: 34 };

  // One progress value drives the page's clip and the travelling logo, so they always move together.
  const progress = useMotionValue(0);
  const from = useRef<Rect>({ x: 0, y: 0, size: 0 });
  const to = useRef<Rect>({ x: 0, y: 0, size: 0 });
  // Closing, the page holds its full size and fades; only the logo travels.
  const closing = useRef(false);
  const clipPath = useTransform(progress, (t) => {
    if (typeof window === "undefined") return "none";
    if (closing.current) return "inset(0px round 0px)";
    const f = from.current;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const top = lerp(f.y, 0, t);
    const left = lerp(f.x, 0, t);
    const right = lerp(w - f.x - f.size, 0, t);
    const bottom = lerp(h - f.y - f.size, 0, t);
    return `inset(${top}px ${right}px ${bottom}px ${left}px round ${lerp(f.size * 0.22, 0, t)}px)`;
  });
  // Opening, the page dissolves in near the card so it never shows a white rim around it; closing,
  // it stays full size and fades out in the first half while the logo travels the whole way back.
  const pageOpacity = useTransform(progress, (t) =>
    closing.current ? Math.min(1, Math.max(0, (t - 0.5) / 0.5)) : Math.min(1, t / 0.3),
  );
  const logoT = useTransform(progress, (t) =>
    closing.current ? t : Math.min(1, Math.max(0, (t - LOGO_HOLD) / (LOGO_LAND - LOGO_HOLD))),
  );
  const logoX = useTransform(logoT, (t) => lerp(from.current.x, to.current.x, t));
  const logoY = useTransform(logoT, (t) => lerp(from.current.y, to.current.y, t));
  const logoSize = useTransform(logoT, (t) => lerp(from.current.size, to.current.size, t));
  const logoRadius = useTransform(logoSize, (s) => s * 0.22);
  const logoShadow = useTransform(logoT, (t) => `0 30px 60px -24px rgba(0, 0, 0, ${0.25 * (1 - t)})`);

  const canEnter = !!CARDS[active].openable;
  const chapter = CHAPTERS.indexOf(CARDS[active]);
  const about = CARDS[active].about;
  const sections = CARDS[active].sections;
  const story = CARDS[active].story;

  // The focused card sits centred in the stage at full size.
  const measureCard = useCallback(() => {
    const stage = stageRef.current?.getBoundingClientRect();
    if (!stage) return;
    from.current = { x: stage.left + (stage.width - stage.height) / 2, y: stage.top, size: stage.height };
  }, []);
  const measureIcon = useCallback(() => {
    const icon = iconRef.current?.getBoundingClientRect();
    if (icon) to.current = { x: icon.left, y: icon.top, size: icon.width };
  }, []);

  const enter = useCallback(() => {
    if (!CARDS[active].openable) return;
    measureCard();
    switched.current = false;
    setPeek(0);
    progress.set(0);
    setLanded(false);
    setEntered(true);
    setPaged(true);
  }, [active, measureCard, progress]);

  // Once the page is mounted its header icon can be measured, and the growth can start.
  useLayoutEffect(() => {
    if (!paged || !entered) return;
    measureIcon();
    const controls = animate(progress, 1, {
      ...(reduce ? { duration: 0 } : spring(OPEN_S)),
      onComplete: () => setLanded(true),
    });
    return () => controls.stop();
  }, [paged, entered, measureIcon, progress, reduce]);

  const leave = useCallback(() => {
    if (!landed || homing) return;
    // The page may have scrolled: the logo starts back from wherever the header icon is now.
    measureIcon();
    measureCard();
    closing.current = true;
    setLanded(false);
    setEntered(false);
    animate(progress, 0, {
      ...(reduce ? { duration: 0 } : spring(CLOSE_S)),
      onComplete: () => {
        closing.current = false;
        setPaged(false);
      },
    });
  }, [landed, homing, measureIcon, measureCard, progress, reduce]);

  const go = useCallback(
    (delta: number) => {
      const next = CHAPTERS[chapter + delta];
      if (!next || !landed || homing) return;
      switched.current = true;
      setDir(delta);
      setActive(CARDS.indexOf(next));
    },
    [chapter, landed, homing],
  );

  const close = useCallback(() => {
    if (paged) setHoming(true);
    setOpen(false);
  }, [paged]);

  const homed = useCallback(() => {
    if (!homing) return;
    progress.set(0);
    setLanded(false);
    setEntered(false);
    setPaged(false);
    setHoming(false);
  }, [homing, progress]);

  useEffect(() => {
    if (!open) {
      setIntroDone(false);
      return;
    }
    const t = setTimeout(() => setIntroDone(true), 1200);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const step = useCallback((delta: number) => setActive((a) => (a + delta + CARDS.length) % CARDS.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom) {
        if (e.key === "Escape") setZoom(null);
        return;
      }
      if (!open) return;
      if (paged) {
        if (e.key === "Escape") leave();
        else if (e.key === "ArrowRight") go(1);
        else if (e.key === "ArrowLeft") go(-1);
        return;
      }
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Enter") enter();
      else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, paged, step, enter, leave, go, zoom]);

  return (
    <main className="relative flex h-[100dvh] flex-col items-center overflow-hidden select-none">
      <motion.div
        ref={headerRef}
        layout
        transition={{ duration: 0.6, ease: EASE }}
        className={`z-20 flex items-center ${open ? "fixed left-6 top-6 flex-row gap-3 text-left" : "relative flex-1 flex-col justify-center gap-10 px-4 text-center"}`}
      >
        {/* Black and white until hovered, then colour. */}
        <motion.button
          layout
          type="button"
          aria-label={open ? "Back to start" : "Open"}
          onClick={() => (open ? close() : setOpen(true))}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ borderRadius: open ? "50%" : "22%" }}
          className={`group shrink-0 overflow-hidden shadow-[0_30px_60px_-24px_rgba(0,0,0,0.25)] ${open ? "h-10 w-10" : "h-[min(26rem,48vh)] w-[min(26rem,48vh)]"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/laura-square.jpg"
            alt="Laura"
            className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
          />
        </motion.button>
        {/* popLayout lifts the outgoing text out of the flow so it fades in place;
            layout="position" stops the container's move from stretching the text. */}
        <AnimatePresence mode="popLayout" initial={false}>
          {open ? (
            <motion.span
              key="name"
              layout="position"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              className="flex flex-col leading-tight"
            >
              <span className="text-base font-semibold text-ink">Laura</span>
              <span className="text-sm text-body">Lagos, Portugal</span>
            </motion.span>
          ) : (
            <motion.span
              key="hello"
              layout="position"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              className="flex flex-col gap-1"
            >
              <span className="text-lg font-semibold text-ink">Hello, I’m Laura.</span>
              <span className="text-base text-body">I love designing and building things.</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence custom={homing}>
        {open && (
          <motion.div
            key="carousel"
            variants={{ gone: (h: boolean) => ({ opacity: 0, transition: { duration: h ? 0 : 0.25 } }) }}
            exit="gone"
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Centred on the page; the controls and text hang below it. */}
            <div className="relative w-full">
              <div ref={stageRef} className="relative h-[min(24rem,60vw)] w-full [perspective:1600px]">
                {CARDS.map((c, i) => {
                  const offset = offsetOf(i, active);
                  const { zIndex, ...base } = placement(offset, vw);
                  // Opened: the focused card stays put for the page to grow from; the rest drift aside and fade.
                  // While the page is up, its travelling logo stands in for the opened card.
                  const target =
                    offset === 0
                      ? { ...base, y: 0, opacity: paged ? 0 : 1 }
                      : !entered
                        ? { ...base, y: 0 }
                        : { ...base, x: base.x + Math.sign(offset) * cardSize(vw) * 0.25, opacity: 0 };
                  return (
                    <motion.button
                      key={c.title}
                      type="button"
                      aria-label={offset === 0 && c.openable ? `Open ${c.title}` : c.title}
                      tabIndex={entered ? -1 : 0}
                      onClick={() => (entered ? undefined : offset === 0 ? enter() : setActive(i))}
                      initial={{ ...base, opacity: 0, y: 40, scale: base.scale * 0.9 }}
                      animate={target}
                      // Leaving for a page, the other cards clear out quickly so only the opened one is left.
                      transition={
                        entered && offset !== 0
                          ? { duration: 0.25, ease: "easeOut" }
                          : {
                              duration: 0.7,
                              ease: EASE,
                              delay: introDone ? 0 : 0.25 + Math.abs(offset) * 0.08,
                              // The opened card swaps with its logo in place, so it must not fade.
                              ...(offset === 0 && introDone && { opacity: { duration: 0 } }),
                            }
                      }
                      style={{ zIndex, pointerEvents: entered ? "none" : "auto" }}
                      className={`absolute inset-0 m-auto h-[min(24rem,60vw)] w-[min(24rem,60vw)] ${offset === 0 && !c.openable ? "cursor-default" : "cursor-pointer"} overflow-hidden rounded-[22%] bg-surface shadow-[0_30px_60px_-24px_rgba(0,0,0,0.25)]`}
                    >
                      {c.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={c.image} alt="" className="h-full w-full object-cover" draggable={false} />
                      )}
                    </motion.button>
                  );
                })}
              </div>
              {/* Hangs below the stage so the cards sit in the middle of the page. */}
              <div className="absolute inset-x-0 top-full mt-10 flex flex-col items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={entered ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
                  transition={{ duration: entered ? 0.25 : 0.5, ease: EASE, delay: introDone ? 0 : 0.6 }}
                  style={{ pointerEvents: entered ? "none" : "auto" }}
                  className="flex items-center gap-5"
                >
                  <RoundButton label="Previous" onClick={() => step(-1)}>
                    <span aria-hidden>←</span>
                  </RoundButton>
                  <RoundButton label="Open" onClick={enter} disabled={!canEnter}>
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink" />
                  </RoundButton>
                  <RoundButton label="Next" onClick={() => step(1)}>
                    <span aria-hidden>→</span>
                  </RoundButton>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={entered ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
                  transition={{ duration: entered ? 0.25 : 0.5, ease: EASE, delay: introDone ? 0 : 0.7 }}
                  className="h-28 px-4"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }}
                      exit={{ opacity: 0, y: -4, transition: { duration: 0.15 } }}
                      className="flex max-w-sm flex-col gap-4 text-center"
                    >
                      <p className="text-base text-ink">{CARDS[active].title}</p>
                      <p className="text-base leading-relaxed text-faint [text-wrap:balance]">{CARDS[active].body}</p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The role shares the corner with the close button, so it gives way to the page. */}
      <motion.div
        initial={false}
        animate={{ opacity: paged ? 0 : 1, transition: { duration: 0.2 } }}
        className="pointer-events-none fixed right-6 top-6 z-30"
      >
        <motion.p
          initial={false}
          animate={{ opacity: open ? 1 : 0, transition: { duration: 0.3, ease: "easeOut", delay: open ? 0.4 : 0 } }}
          className="flex h-10 items-center text-sm text-body"
        >
          Product Designer
        </motion.p>
      </motion.div>

      {/* On the white page the usual light hover would vanish, so this one darkens instead. */}
      <AnimatePresence>
        {open && entered && (
          <motion.button
            key="close"
            type="button"
            aria-label="Close"
            onClick={() => leave()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, delay: OPEN_S * 0.7 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="fixed right-6 top-6 z-30 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-surface"
          >
            <span aria-hidden>✕</span>
          </motion.button>
        )}
      </AnimatePresence>

      {paged && (
        // The page that gives context to the focused card, grown out of it.
        <motion.div
          initial={false}
          animate={{ opacity: homing ? 0 : 1 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
          onAnimationComplete={homed}
          className="relative z-10"
        >
          <motion.section
            ref={pageRef}
            style={{ clipPath, opacity: pageOpacity }}
            // The carousel behind is dragged, so it can't be selected; this page is read, so it can.
            className={`fixed inset-0 z-10 bg-white select-text ${landed ? "overflow-y-auto" : "overflow-y-hidden"}`}
          >
            <AnimatePresence mode="wait" custom={dir} onExitComplete={() => pageRef.current?.scrollTo({ top: 0 })}>
              <motion.div
                key={active}
                custom={dir}
                variants={slide}
                initial={switched.current ? "enter" : false}
                animate="center"
                exit="exit"
                className="mx-auto max-w-7xl px-6 pb-24 pt-[88px] md:px-10"
              >
                {about && (
                  <header className="mb-16 flex max-w-md flex-col gap-6">
                    <div
                      ref={iconRef}
                      style={{ opacity: landed ? 1 : 0 }}
                      className="h-20 w-20 overflow-hidden rounded-[22%]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={CARDS[active].image} alt="" className="h-full w-full object-cover" draggable={false} />
                    </div>
                    <motion.div
                      custom={0}
                      variants={content}
                      initial={switched.current ? false : "hidden"}
                      animate={entered ? "shown" : "hidden"}
                      className="flex items-center gap-3 text-base text-ink"
                    >
                      <span className="rounded-full bg-surface px-3 py-1 tabular-nums">
                        {String(CHAPTERS.indexOf(CARDS[active]) + 1).padStart(2, "0")} /{" "}
                        {String(CHAPTERS.length).padStart(2, "0")}
                      </span>
                      {about.kind}
                    </motion.div>
                    <motion.div
                      custom={1}
                      variants={content}
                      initial={switched.current ? false : "hidden"}
                      animate={entered ? "shown" : "hidden"}
                      className="flex flex-col gap-6"
                    >
                      {about.meta.length > 0 && <p className="text-base text-faint">{about.meta.join(" · ")}</p>}
                      {about.name && (
                        <p className="text-base leading-relaxed text-ink">
                          <span className="font-semibold">{about.name}</span> {about.intro}
                        </p>
                      )}
                    </motion.div>
                  </header>
                )}
                <motion.div
                  custom={2}
                  variants={content}
                  initial={switched.current ? false : "hidden"}
                  animate={entered ? "shown" : "hidden"}
                  className="flex flex-col gap-24"
                >
                  {sections?.map((sec, si) => (
                    <section key={si} className="flex flex-col gap-10">
                      {(sec.heading || sec.body) && (
                        <div className="flex max-w-md flex-col gap-3">
                          {sec.heading && <h2 className="text-base font-semibold text-ink">{sec.heading}</h2>}
                          {sec.body && <p className="text-base leading-relaxed text-body">{sec.body}</p>}
                        </div>
                      )}
                      <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                        {sec.tiles.map((t, ti) => {
                          return (
                            <figure
                              key={ti}
                              className={`flex flex-col gap-4 ${t.full ? "col-span-3" : t.wide ? "col-span-2" : ""}`}
                            >
                              <div
                                className={`flex flex-col items-center gap-6 overflow-hidden rounded-[32px] bg-bg ${t.bottom ? "justify-end" : "justify-center"} ${t.full ? "p-16" : `p-8 ${t.bottom ? "pb-0" : ""} ${t.wide ? "aspect-[11/4]" : "aspect-[4/3]"}`}`}
                              >
                                {t.images.length === 0 && <span className="text-sm text-faint">Image</span>}
                                {t.images.map((src) => (
                                  <motion.img
                                    key={src}
                                    layoutId={`zoom:${src}`}
                                    transition={zoomMotion}
                                    srcSet={`${src} 2x`}
                                    alt=""
                                    draggable={false}
                                    onClick={() => setZoom(src)}
                                    className={
                                      t.full
                                        ? "w-full cursor-pointer rounded-2xl shadow-[0_24px_48px_-24px_rgba(0,0,0,0.2)]"
                                        : "min-h-0 max-w-full cursor-pointer object-contain"
                                    }
                                  />
                                ))}
                              </div>
                              <figcaption className="flex flex-col gap-1 text-base">
                                <span className="text-ink">{t.name}</span>
                                {t.note && <span className="text-faint">{t.note}</span>}
                              </figcaption>
                            </figure>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                  {story?.map((block, bi) =>
                    "figures" in block ? (
                      <div key={bi} className={`grid gap-6 ${block.figures.length > 1 ? "grid-cols-2" : ""}`}>
                        {block.figures.map((f, fi) => (
                          <figure key={fi} className="flex flex-col gap-4">
                            <div
                              className={`flex items-center justify-center overflow-hidden ${f.plain ? "" : "rounded-[32px] bg-bg"} ${f.bleed || f.plain ? "" : f.tweet ? "p-10" : "aspect-[4/3] p-10"}`}
                            >
                              {f.tweet ? (
                                <TweetEmbed url={f.tweet} />
                              ) : !f.image ? (
                                <span className="text-center text-sm text-faint">{f.note ?? "Image"}</span>
                              ) : f.image.endsWith(".mp4") ? (
                                <StoryVideo
                                  src={f.image}
                                  className={
                                    f.bleed || f.plain ? "w-full" : "max-h-full min-h-0 max-w-full object-contain"
                                  }
                                />
                              ) : (
                                <motion.img
                                  layoutId={`zoom:${f.image}`}
                                  transition={zoomMotion}
                                  src={f.image}
                                  alt=""
                                  draggable={false}
                                  onClick={() => setZoom(f.image ?? null)}
                                  className={`cursor-pointer ${f.bleed || f.plain ? "w-full" : "max-h-full min-h-0 max-w-full object-contain"}`}
                                />
                              )}
                            </div>
                            <figcaption className="text-base text-faint">{f.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : (
                      // The text sits in a narrow column set in from the left, so it reads apart from the work.
                      <div key={bi} className="grid grid-cols-12">
                        <div className="col-span-5 col-start-4 flex flex-col gap-4">
                          <h2 className="text-base font-semibold text-ink">{block.heading}</h2>
                          {block.body?.map((para) => (
                            <p key={para} className="text-base leading-relaxed text-body">
                              {para}
                            </p>
                          ))}
                          {block.points && (
                            <ul className="flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-body">
                              {block.points.map(([lead, text]) => (
                                <li key={lead}>
                                  <span className="font-semibold text-ink">{lead}</span> {text}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.section>
        </motion.div>
      )}

      {/* The neighbouring projects, shown when the mouse nears that edge of the page. They start below
          the avatar and the close button, so reaching for those never brings them up. */}
      {paged &&
        landed &&
        [-1, 1].map((side) => {
          const card = CHAPTERS[chapter + side];
          if (!card) return null;
          const n = chapter + side + 1;
          return (
            <button
              key={side}
              type="button"
              aria-label={`${side > 0 ? "Next" : "Previous"}: ${card.title}`}
              onClick={() => go(side)}
              onMouseEnter={(e) => {
                followPeek(e, true);
                setPeek(side);
              }}
              onMouseMove={followPeek}
              onMouseLeave={() => setPeek(0)}
              className={`fixed bottom-0 top-40 z-20 w-24 outline-none ${side > 0 ? "right-0" : "left-0"}`}
            >
              <motion.span
                initial={false}
                animate={peek === side ? { opacity: 1, x: 0 } : { opacity: 0, x: side * 16 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={{ top: peekY, y: "-50%" }}
                className="absolute inset-x-0 flex flex-col items-center gap-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt=""
                  draggable={false}
                  className="h-16 w-16 rounded-[22%] object-cover shadow-[0_16px_32px_-16px_rgba(0,0,0,0.3)]"
                />
                <span className="text-sm tabular-nums text-faint">
                  {side < 0 && "← "}
                  {String(n).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
                  {side > 0 && " →"}
                </span>
              </motion.span>
            </button>
          );
        })}

      {/* The card's logo, travelling between the card and the page's header. */}
      {paged && !landed && CARDS[active].image && (
        <motion.img
          src={CARDS[active].image}
          alt=""
          aria-hidden
          draggable={false}
          style={{
            x: logoX,
            y: logoY,
            width: logoSize,
            height: logoSize,
            borderRadius: logoRadius,
            boxShadow: logoShadow,
          }}
          className="pointer-events-none fixed left-0 top-0 z-20 object-cover"
        />
      )}
      <AnimatePresence>
        {zoom && (
          <motion.div
            key="zoom-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
            onClick={() => setZoom(null)}
            className="fixed inset-0 z-50 bg-bg"
          />
        )}
        {zoom && (
          <motion.div
            key="zoom"
            exit={{ opacity: 1 }}
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-10"
          >
            <motion.img
              layoutId={`zoom:${zoom}`}
              transition={zoomMotion}
              src={zoom}
              alt=""
              draggable={false}
              onClick={() => setZoom(null)}
              className="pointer-events-auto max-h-full max-w-full cursor-pointer object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
