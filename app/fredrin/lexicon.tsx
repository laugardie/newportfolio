// The Lexicon card's case-study entry: my first design job, at Liferay, on their design system.
// Shown under the card's title and line when the card is opened.

const DOCS = "https://design.liferay.com/lexicon/core-components/buttons/action-buttons/";

// Component work, exported at 2x on a light grey that the tiles match. `wide` spans both columns.
const TILES: { name: string; note: string; image: string; wide?: boolean }[] = [
  {
    name: "Text editor toolbar",
    note: "Formatting controls for Liferay’s rich text editor.",
    image: "/assets/lexicon/toolbar.png",
    wide: true,
  },
  { name: "Labels", note: "Status labels in every semantic colour.", image: "/assets/lexicon/labels.png" },
  { name: "Menus", note: "Menu items with icons and shortcuts.", image: "/assets/lexicon/menu.png" },
  { name: "Dual Listbox", note: "Moving items between two lists.", image: "/assets/lexicon/dual-listbox.png", wide: true },
  { name: "Modals", note: "Dialogs with a clear primary action.", image: "/assets/lexicon/modal.png", wide: true },
  { name: "Toasts", note: "Confirming an action and offering the next.", image: "/assets/lexicon/toast.png" },
  { name: "Action buttons", note: "Colour-coded buttons for each kind of action.", image: "/assets/lexicon/action-buttons.png" },
  { name: "Icon buttons", note: "Borderless buttons and their states.", image: "/assets/lexicon/icon-buttons.png" },
  { name: "Keys", note: "Keyboard keys, light and dark.", image: "/assets/lexicon/keys.png" },
  { name: "Shortcuts", note: "Tooltips that teach the keyboard.", image: "/assets/lexicon/shortcut.png" },
  { name: "Icons", note: "Part of the icon set.", image: "/assets/lexicon/icons.png" },
];

export function LexiconStory() {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-14 text-left">
      <div className="flex max-w-xl flex-col gap-5">
        <p className="text-center text-sm text-[#8b8b8b]">
          Liferay / Lexicon · Design System Designer · Oct 2019 – Jun 2020
        </p>
        <p className="text-base leading-relaxed text-[#c8c8c8]">
          Lexicon is Liferay’s design system, the shared framework behind all their products. I designed and refined
          components like action buttons, the dual listbox, keys, labels and modals, drew new icons, and wrote the
          documentation for them in the design site’s codebase.
        </p>
        <p className="text-base leading-relaxed text-[#c8c8c8]">
          Lexicon is open source, so it reaches beyond Liferay: its Figma file has more than 5.8k users, the icons file
          more than 7k, and Clay, its implementation, over 500 forks on GitHub. Small pieces of a big system, but it’s
          where I learned that good design is mostly invisible and almost always collaborative.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
        {TILES.map((t) => (
          <figure key={t.name} className={`flex flex-col gap-3 ${t.wide ? "sm:col-span-2" : ""}`}>
            <div
              className={`flex items-center justify-center overflow-hidden rounded-[28px] bg-[#f3f3f3] p-6 sm:p-8 ${t.wide ? "aspect-[4/3] sm:aspect-[11/4]" : "aspect-[4/3]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.image} alt={t.name} className="max-h-full max-w-full object-contain" draggable={false} />
            </div>
            <figcaption className="flex flex-col gap-0.5 px-1">
              <span className="text-sm text-[#ededed]">{t.name}</span>
              <span className="text-sm text-[#8b8b8b]">{t.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <a
        href={DOCS}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/[0.08] px-5 py-2.5 text-sm text-[#ededed] transition-colors duration-200 hover:bg-white/[0.16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
      >
        View documentation ↗
      </a>
    </div>
  );
}
