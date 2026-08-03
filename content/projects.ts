export type ProjectSection = {
  type: "text" | "image" | "video" | "embed";
  content: string;
  heading?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  thumbnail: string;
  thumbnailScale?: number;
  description: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "flexile-github-integration",
    title: "Flexile GitHub Integration",
    company: "Flexile (Antiwork)",
    year: "2026",
    thumbnail: "/assets/flexile-preview.svg",
    thumbnailScale: 1.15,
    description:
      '<a href="https://flexile.com/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Flexile</a> is a contractor payments platform. Gumroad uses it to pay open source contributors. Both are part of <a href="https://antiwork.com/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Antiwork</a>.',
    sections: [
      {
        type: "text",
        heading: "The problem",
        content:
          "Every time a contributor submitted an invoice, an admin had to manually verify they actually owned the PR. One by one.",
      },
      {
        type: "text",
        heading: "What we shipped",
        content:
          "A GitHub integration that automatically surfaces whether a PR is merged, open, or closed. It verifies contributor ownership, pulls in the dollar label from GitHub, so contributors know exactly what to invoice and admins know exactly what to pay and who. And it flags if the PR was already paid in a previous invoice, so nothing gets paid twice.",
      },
      {
        type: "video",
        content: "/assets/githubintegration.mp4",
        caption: "GitHub integration in action",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          'Contractors spend less time invoicing, and admins have a clearer, faster payment workflow.<br /><br />Here\'s the <a href="https://github.com/antiwork/flexile/issues/1507" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">GitHub issue</a> and the <a href="https://www.figma.com/design/3hnLTTti7oMlsj8VmQmWEL/Github-integration?node-id=1-63&t=328iNJD1Li018zjv-1" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Figma file</a> if you\'re curious.',
      },
    ],
  },
  {
    slug: "gumroad-community",
    title: "Community",
    company: "Gumroad (Antiwork)",
    year: "2025",
    thumbnail: "/assets/community-preview.svg",
    thumbnailScale: 0.65,
    description:
      "Creators were already building communities around their work, just not inside Gumroad. Every time a customer bought something, they'd get a link and have to go somewhere else to connect.",
    sections: [
      {
        type: "text",
        heading: "What I designed",
        content:
          "A built-in community tied to each product. Buy a product, get access to its community. Creators could talk to their customers, and customers could talk to each other. No third-party tools or extra links; it was part of the product.<br /><br />We shipped it in April 2025. It was the first time Gumroad had a space for creators to connect with their customers.",
      },
      {
        type: "text",
        content: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🆕🔥 Run your Community on Gumroad. <br><br>Now your customers can actually talk to each other (and you) <a href="https://t.co/DAFM3YxIUO">pic.twitter.com/DAFM3YxIUO</a></p>&mdash; Gumroad (@gumroad) <a href="https://twitter.com/gumroad/status/1909665556061733259?ref_src=twsrc%5Etfw">April 8, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
      },
    ],
  },
  {
    slug: "gumroad-design-system",
    title: "Gumroad Design System",
    company: "Gumroad (Antiwork)",
    year: "2024",
    thumbnail: "/assets/gumroadDS-preview.svg",
    thumbnailScale: 0.72,
    description:
      'In 2024, <a href="https://jchang.cc/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Jason</a> (Designer), <a href="https://x.com/MayaRainer_" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Maya</a> (Engineer), and I audited every component in our design system and published it to the Figma Community.',
    sections: [
      {
        type: "text",
        content:
          '<div class="md:-mx-16 rounded-2xl bg-surface"><iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="w-full h-[480px] rounded-2xl" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/community/file/1405573618937136138" allowfullscreen></iframe></div>',
      },
      {
        type: "text",
        heading: "The problem",
        content:
          "Everything existed in both Figma and Storybook, but they'd quietly drifted apart. Names were different, things looked slightly off on each side, and it had gotten to a point where developers weren't sure what to follow. We also wanted to make the system public to attract talent, get more people engaging with what we were building, and eventually open source Gumroad entirely.",
      },
      {
        type: "text",
        heading: "Approach",
        content:
          "We audited buttons, pills, alerts, modals, and every other component across Figma and Storybook. We identified visual differences, implementation gaps, and naming that only made sense to designers or developers, then chose terminology that worked for both.<br /><br />We rebuilt the components using Figma's newer properties and variables and documented them clearly so both sides could stay in sync. We also opened PRs to close the visual gaps in Storybook, so what designers handed off matched what developers built.",
      },
      {
        type: "image",
        content: "/assets/ds-canvas.png",
        caption: "Design system canvas in Notion",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          "We shipped in August 2024 and published it to the Figma Community. The most important result was that the product looked better: more consistent and more considered. The kind of thing most people won't notice, but designers always do.",
      },
    ],
  },
  {
    slug: "gumroad-tipping",
    title: "Tipping",
    company: "Gumroad (Antiwork)",
    year: "2024",
    thumbnail: "/assets/tipping-preview.svg",
    thumbnailScale: 0.6,
    description:
      "Gumroad asked creators a simple question on Twitter: tipping, yes or no? 377 votes later, yes won. Three days after that, it was live.",
    sections: [
      {
        type: "text",
        content: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You said yes. Tipping is here! <a href="https://t.co/tkmxVFUrMb">https://t.co/tkmxVFUrMb</a></p>&mdash; Gumroad (@gumroad) <a href="https://twitter.com/gumroad/status/1822260682198311396?ref_src=twsrc%5Etfw">August 10, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
      },
      {
        type: "text",
        heading: "The problem",
        content:
          "Creators on Gumroad had no way to receive tips. Every sale was a fixed transaction, no room for a buyer to say 'hey, I loved this, here\'s a little extra.' For a platform built around supporting creators, that felt like a missed opportunity.",
      },
      {
        type: "text",
        heading: "Approach",
        content:
          "I designed the tipping flow as part of the existing checkout, adding preset options plus a custom amount right before the pay button. The goal was to make it feel natural, not pushy.<br /><br />We shipped a first version with 0%, 10%, 20%, and a custom tip, defaulting to 20%. Tips initially represented 4.5% of GMV. Some creators felt the preselected amount put pressure on their customers, so we listened and iterated. The second version replaced 0% with 'No tip', shifted the options to 15%, 20%, and 25%, and changed the default to 'No tip'. Tips then represented around 0.7% of GMV, but the new default better reflected what creators wanted for their customers.<br /><br />",
      },
      {
        type: "image",
        content: "/assets/customtip.png",
        caption: "Custom tip",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          'Creators began finding unexpected tips in their Gumroad account balances; some even thought there was a bug. Soon, a user shared their experience <a href="https://harnarayan.medium.com/gumroad-tipping-the-best-feature-726e162ebaea" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">on Medium</a>.',
      },
      {
        type: "text",
        content: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Looks like I am getting tipped at Gumroad! 💸<br><br>First I noticed I am getting sales for $17.99 and not $14.99. I thought something is wrong.<br><br>But it&#39;s just people giving me $3 tips😅<br><br>And just today I got a $5 dollar tip on my $50 book.<br><br>Nice little feature to help creators. Thanks…</p>&mdash; Josef Strzibny (@strzibnyj) <a href="https://twitter.com/strzibnyj/status/1827539962583249026?ref_src=twsrc%5Etfw">August 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
      },
    ],
  },
  {
    slug: "gumroad-more-like-this",
    title: "More like this",
    company: "Gumroad (Antiwork)",
    year: "2024",
    thumbnail: "/assets/morelikethis-preview.svg",
    thumbnailScale: 0.72,
    description:
      "Creators put a lot of work into building a catalogue. But once someone bought a product, there was no easy way to show them what else was worth getting. The sale was done and that was it.",
    sections: [
      {
        type: "image",
        content: "/assets/morelikethis.png",
        caption: "More like this in the content editor",
      },
      {
        type: "text",
        heading: "What I designed and shipped",
        content:
          "A recommendations block creators can drop into any product page. Three products, configured right from the block settings. They can choose to show only their own products, a mix of their own and affiliated ones, or pull from Gumroad's affiliate catalogue. Simple to set up, and a natural way to keep customers discovering more. I designed it and built the frontend myself.",
      },
    ],
  },
  {
    slug: "gumroad-team-members",
    title: "Team members",
    company: "Gumroad (Antiwork)",
    year: "2023",
    thumbnail: "/assets/teams-preview.svg",
    thumbnailScale: 0.68,
    description:
      "Before this, if you needed someone to help run your Gumroad account, your only option was to hand them your email and password. No roles, no permissions, just full access or nothing. And if you were juggling multiple accounts yourself, you were logging in and out constantly.",
    sections: [
      {
        type: "text",
        heading: "What I designed",
        content:
          "I led the design of Team Members: a way to invite people to co-admin an account and switch between accounts without logging out. The account switcher was the key interaction: fast and available in one click from anywhere.",
      },
      {
        type: "image",
        content: "/assets/gumroadblog2.png",
        caption: "Team members",
      },
      {
        type: "text",
        content:
          "Gumroad announced it in February 2023. Sahil wrote the launch post from the Gumroad account without logging out of his personal one, demonstrating the feature in use.",
      },
    ],
  },
  {
    slug: "gumroad-checkout-redesign",
    title: "Checkout Redesign",
    company: "Gumroad (Antiwork)",
    year: "2022",
    thumbnail: "/assets/gumroad-preview.svg",
    thumbnailScale: 0.95,
    description:
      "The checkout is one of the most important pages on Gumroad. It was time to rebuild it from scratch, using feedback from creators to shape the redesign.",
    sections: [
      {
        type: "text",
        heading: "The first redesign (2022)",
        content:
          "I led the checkout redesign. Before, it was a single page built around buying one thing. The new version could handle multiple products, discounts, and the full cart experience. I also contributed to the code, integrating new components into the team library.",
      },
      {
        type: "image",
        content: "/assets/gumroadblog1.png",
        caption: "Checkout redesign 2022",
      },
      {
        type: "text",
        heading: "The update (2025)",
        content:
          "In 2025, I returned to the checkout. We kept the core structure while reorganising the information hierarchy, redesigning the payment method toggle, and moving the tipping section to a better position. I designed the update and implemented part of it in the production codebase.",
      },
      {
        type: "image",
        content: "/assets/gumroad-checkout2026.png",
        caption: "Checkout update 2025",
      },
    ],
  },
  {
    slug: "nectar-design-system",
    title: "Nectar, Design System",
    company: "Beezy",
    year: "2022",
    thumbnail: "/assets/nectar-preview.svg",
    thumbnailScale: 1.3,
    description:
      'At <a href="https://www.beezy.net/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Beezy</a>, I built a design system from scratch. There were no inherited decisions or legacy components to work around, only a blank Figma file and a team that needed consistency.',
    sections: [
      {
        type: "text",
        heading: "The work",
        content:
          "I started with the foundations: design tokens, naming conventions, scalable component architecture, and a clear organizational hierarchy. In parallel, I shaped the visual identity of the system itself, including its voice and logo. I named it Nectar.\n\nFrom there, I designed and documented the core components, integrating them into a shared Figma library that was structured, intuitive, and built for collaboration between design and engineering.",
      },
      {
        type: "image",
        content: "/assets/nectarblog1.png",
        caption: "A Glimpse into the Nectar Design System",
      },
      {
        type: "text",
        heading: "What I learned",
        content:
          "Starting Nectar from scratch was both exciting and overwhelming. There were no old decisions to lean on — every structure, every name, every rule had to be thought through intentionally.\n\nI learned how important the foundations really are. Things like naming conventions, file organization, and documentation might seem small, but they shape how easy (or frustrating) a system is to use.\n\nI also realized that a design system is never ‘finished’. It has to evolve with the team. Keeping Nectar updated and relevant was just as important as building it in the first place.\n\nMost of all, I learned to think beyond individual screens and focus on systems; on how everything connects and supports the people using it.",
      },
    ],
  },
  {
    slug: "theater-mode",
    title: "Theater mode",
    company: "Beezy",
    year: "2021",
    thumbnail: "/assets/theatermode-preview.svg",
    thumbnailScale: 0.63,
    description:
      'A feature I designed at <a href="https://www.beezy.net/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Beezy</a>, a modern intranet platform. Two weeks, one clear problem: Users had to download files just to read them. Then switch windows to comment. Then switch back. It was the kind of friction that adds up quietly until everyone just stops engaging.',
    sections: [
      {
        type: "text",
        heading: "The idea",
        content:
          "A modal that lets you view anything — documents, images, videos, PDFs — without leaving the page. Comment in real time, react, flip through attachments. Stay in the flow.",
      },
      {
        type: "image",
        content: "/assets/theatremodeblog6.png",
        caption: "Theater Mode on desktop",
      },
      {
        type: "text",
        heading: "What I designed",
        content:
          "Distraction-free mode. Hide the comments panel, full screen, just you and the content.<br />" +
          "Content thumbnails. A horizontal scroll of everything attached, so you always know what's there and can jump between files without hunting.<br />" +
          "Side-by-side comments. Content on the left, conversation on the right. No context switching.<br />" +
          "One modal, every file type. Images, docs, videos, PDFs, all handled the same way.",
      },
      {
        type: "text",
        heading: "What I learned",
        content:
          "Two weeks is not a lot of time. You get very good at cutting scope quickly. The features that made it in were the ones that solved the actual problem, everything else waited.",
      },
    ],
  },
  {
    slug: "lexicon-design-system",
    title: "Lexicon, Design System",
    company: "Liferay",
    year: "2020",
    thumbnail: "/assets/lexicon-preview.svg",
    thumbnailScale: 1.15,
    description:
      "I joined Liferay fresh out of bootcamp. My first real design job, and I landed in a Design System team, which turned out to be the best possible place to start. It also lit something in me. I've been obsessed with design systems ever since.",
    sections: [
      {
        type: "text",
        heading: "The work",
        content:
          '<a href="https://liferay.design/lexicon/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Lexicon</a> is Liferay\'s design system, the shared framework across all their products. My job was to make sure components felt consistent, accessible, and actually usable by the teams building with them.',
      },
      {
        type: "image",
        content: "/assets/liferay.jpeg",
        caption:
          "The Design System Team and the Research Team working on a Heuristic project at Liferay.",
      },
      {
        type: "text",
        heading: "Impact",
        content:
          'I contributed to components like <a href="https://liferay.design/lexicon/core-components/buttons/action-buttons/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Action Buttons</a>, <a href="https://liferay.design/lexicon/core-components/dual-listbox/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Dual Listbox</a>, <a href="https://liferay.design/lexicon/core-components/keys/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Keys</a>, <a href="https://liferay.design/lexicon/core-components/labels/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Labels</a>, and <a href="https://liferay.design/lexicon/core-components/modals/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Modals</a>, and designed new icons. Small pieces of a big system, but that\'s where I learned that good design is mostly invisible and almost always collaborative.',
      },
    ],
  },
];
