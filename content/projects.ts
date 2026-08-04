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
          "Feedback from both admins and contributors pointed to two sides of the same problem. Admins had to manually verify that each contributor owned the PR they were invoicing for. Contributors couldn’t easily see the status of their PR or know exactly how much to invoice.",
      },
      {
        type: "text",
        heading: "My role",
        content:
          "I started with a prototype to work through the core flow, then designed the UI and states. As the integration was implemented, I worked with engineering and open source contributors to address edge cases, review the implemented UI, and refine the details before release.",
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
          'After launch, both admins and contributors responded positively to the clearer workflow.<br /><br />Here\'s the <a href="https://github.com/antiwork/flexile/issues/1507" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">GitHub issue</a> and the <a href="https://www.figma.com/design/3hnLTTti7oMlsj8VmQmWEL/Github-integration?node-id=1-63&t=328iNJD1Li018zjv-1" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Figma file</a> if you\'re curious.',
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
      "Feedback gathered from creators and shared by the product team pointed to a clear gap. Creators wanted to communicate with their customers without sending them to third-party tools, while also giving customers a place to talk to each other.",
    sections: [
      {
        type: "text",
        heading: "My role",
        content:
          "I created the prototype and designed the UX and UI for the chat, notifications, and the way each community integrated with its product. The access model connected community membership to a purchase: buy a product, get access to its community.",
      },
      {
        type: "text",
        heading: "What we shipped",
        content:
          "A built-in community tied to each product, where creators could talk to their customers and customers could talk to each other. We shipped it in April 2025, creating Gumroad’s first native space for those conversations.",
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
        type: "text",
        heading: "My contribution",
        content:
          "We divided the audit by assigning components to each person. My scope included foundations such as brand, shadows, spacing, breakpoints, and border radius; icon and illustration systems; and components including buttons, alerts, pills, tooltips, modals, inputs, and the WYSIWYG editor. I shared colors and typography with Jason.<br /><br />Across those areas, I audited Figma against Storybook, rebuilt components using properties and variables, clarified naming and documentation, and contributed PRs to close visual gaps in the implementation.",
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
          "We published the system to the Figma Community in August 2024. I also contributed implementation PRs that matched Figma and Storybook naming for pills, corrected the balance of the pill icon, and standardised alert typography.",
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
      "Gumroad asked creators a simple question on Twitter: tipping, yes or no? Yes received the largest share of 377 votes. Less than three days later, tipping was live.",
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
        heading: "My role",
        content:
          "I defined the problem and explored possible approaches with another designer. I then created the prototype and designed the UI. After launch, I followed public replies from creators and used them to shape the next iteration.",
      },
      {
        type: "text",
        heading: "The first release",
        content:
          "I designed the tipping flow as part of the existing checkout, adding preset options and a custom amount directly before the pay button. The goal was to make tipping feel natural rather than pushy. The first version offered 0%, 10%, 20%, and a custom amount, with 20% selected by default.",
      },
      {
        type: "text",
        heading: "What we learned and changed",
        content:
          'With 20% selected by default, tips increased GMV by approximately 4.5%. Public replies from creators revealed that the preselected amount could put pressure on their customers. We replaced 0% with "No tip", changed the options to 15%, 20%, and 25%, and made "No tip" the default. With a 0% default, tips increased GMV by around 0.7%, while the new default better reflected what creators wanted for their customers.',
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
      "The product team identified an opportunity after purchase. Creators invested in building a catalogue, but once a customer bought something, there was no simple way to help them discover what else might be relevant.",
    sections: [
      {
        type: "image",
        content: "/assets/morelikethis.png",
        caption: "More like this in the content editor",
      },
      {
        type: "text",
        heading: "My role",
        content:
          "I created the prototype, designed the UI and its states, and built the frontend. I worked with engineering, who implemented the backend and connected the recommendations to the product catalogue.",
      },
      {
        type: "text",
        heading: "What we shipped",
        content:
          "A recommendations block creators could add to any product page. From the block settings, they could choose recommendations from their own products, their own and affiliated products, or Gumroad’s affiliate catalogue. The designs covered populated and empty results, reordering, settings, and deletion.",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          "After launch, we received positive feedback from creators using the feature.",
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
      "Gumroad accounts were tied to a single email address. Creators who needed help with support, marketing, or accounting had no team model, while people managing several accounts had to keep logging in and out.",
    sections: [
      {
        type: "text",
        heading: "My role",
        content:
          "I led the design of Team Members. I mapped the owner and member flows, then designed invitations, pending and expired states, role-based permissions, removing or revoking access, email mismatch errors, and paths for both new and existing users. I iterated with the team on role clarity, sorting, the invitation form, and making Settings easier to find.",
      },
      {
        type: "image",
        content: "/assets/gumroadblog2.png",
        caption: "Team members",
      },
      {
        type: "text",
        heading: "What we shipped",
        content:
          "We launched co-admin invitations and account switching in February 2023. The wider permission model defined separate access for admins, marketers, support, and accountants across products, analytics, payouts, audience, and settings. Sahil demonstrated the switcher by writing the launch post from the Gumroad account without logging out of his personal one.",
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
      "The checkout is one of the most important pages on Gumroad. I worked on two major iterations: a rebuild in 2022 and a focused update in 2025.",
    sections: [
      {
        type: "text",
        heading: "The first redesign (2022)",
        content:
          "I led the checkout redesign. Before, it was a single page built around buying one thing. The new version could handle multiple products, discounts, and the full cart experience. I also implemented the Storybook cart-item component and its styling, including the mobile states, and iterated on review feedback before it reached production.",
      },
      {
        type: "image",
        content: "/assets/gumroadblog1.png",
        caption: "Checkout redesign 2022",
      },
      {
        type: "text",
        heading: "Creator feedback (2025)",
        content:
          "Feedback gathered by the team through conversations with creators highlighted three problems. Gifting a product was hard to discover. On mobile, the payment UI wasn’t responsive and had become too complex. And after adding a tip, the information hierarchy made the final total difficult to identify.",
      },
      {
        type: "text",
        heading: "The update (2025)",
        content:
          "I redesigned the flow around those issues. Gifting moved closer to the product being gifted. The payment page was restructured so completing the payment became the final step, and the payment UI was updated to work responsively. I moved tipping before the total so the final amount was clear. I designed the update, then implemented the page restructure and payment UI in production.",
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
