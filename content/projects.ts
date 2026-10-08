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
  description: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "flexile-github-integration",
    title: "Flexile GitHub Integration",
    company: "Flexile",
    year: "2026",
    thumbnail: "/assets/flexile-preview.svg",
    description:
      '<a href="https://flexile.com/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Flexile</a> is a contractor payments platform that Gumroad uses to pay open-source contributors. Both are part of <a href="https://antiwork.com/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Antiwork</a>.',
    sections: [
      {
        type: "text",
        heading: "The problem",
        content:
          'The invoicing flow relied on GitHub data that wasn’t available in Flexile. Admins had to check PRs manually, while contributors had to look up things like status and bounty before creating an invoice.',
      },
      {
        type: "text",
        heading: "What I did",
        content:
          '<p class="mb-5">I first built a prototype in v0 to figure out the flow, then designed the UI in Figma. Once a company and a contractor connected their GitHub accounts, Flexile could check PR ownership and status, get the payment amount from GitHub labels, and detect if the PR had already been paid.</p><p class="mb-5">Some edge cases only became obvious once we started implementing it. For example, a PR could have more than one contributor and the bounty could be split between them.</p><p class="mb-5">Initially, every PR had a “verified” or “unverified” label. But in practice, it was too much. The labels added a lot of noise, took up space we needed for other information, and made admins scan the labels on every PR. I changed this to a small orange dot that only appeared when something needed to be reviewed.</p><p>The verification state was moved into a hover card with the rest of the PR information. I also added a short delay so the card wouldn’t keep popping up while someone moved their cursor across the invoice.</p>',
      },
      {
        type: "video",
        content:
          '/assets/githubintegration.mp4',
        caption: "GitHub integration in action",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          'What mattered most for admins was quickly finding the PRs that needed attention. This kept the invoice UI much calmer, while leaving the extra information there when someone actually needed it. After launch, both admins and contributors responded positively to the clearer workflow.<br /><br />Here\'s the <a href="https://www.figma.com/design/3hnLTTti7oMlsj8VmQmWEL/Github-integration?node-id=1-63&t=328iNJD1Li018zjv-1" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Figma file</a> if you\'re curious.',
      },
    ],
  },
  {
    slug: "gumroad-community",
    title: "Community",
    company: "Gumroad",
    year: "2025",
    thumbnail: "/assets/community-preview.svg",
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
    company: "Gumroad",
    year: "2024",
    thumbnail: "/assets/gumroadDS-preview.svg",
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
          'Everything existed in both Figma and Storybook, but they\'d quietly drifted apart. Names were different, things looked slightly off on each side, and it had gotten to a point where developers weren\'t sure what to follow. We also wanted to make the system public to attract talent, get more people engaging with what we were building, and eventually open source Gumroad entirely.',
      },
      {
        type: "text",
        heading: "What I did",
        content:
          '<p class="mb-5">We audited buttons, pills, alerts, modals, and every other component across Figma and Storybook. We identified visual differences, implementation gaps, and naming that only made sense to designers or developers, then chose terminology that worked for both.<br /><br />We rebuilt the components using Figma\'s newer properties and variables and documented them clearly so both sides could stay in sync. We also opened PRs to close the visual gaps in Storybook, so what designers handed off matched what developers built.</p><p>We divided the audit by assigning components to each person. My scope included foundations such as brand, shadows, spacing, breakpoints, and border radius; icon and illustration systems; and components including buttons, alerts, pills, tooltips, modals, inputs, and the WYSIWYG editor. I shared colors and typography with Jason.<br /><br />Across those areas, I audited Figma against Storybook, rebuilt components using properties and variables, clarified naming and documentation, and contributed PRs to close visual gaps in the implementation.</p>',
      },
      {
        type: "image",
        content:
          '/assets/ds-canvas.png',
        caption: "Design system canvas in Notion",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          'We published the system to the <a href="https://www.figma.com/community/file/1405573618937136138" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Figma Community</a> in August 2024, where it has been used by more than 2.6k people. It was announced by <a href="https://x.com/shl/status/1823746825783763439" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Sahil</a> and <a href="https://x.com/gumroad/status/1824164280410968295" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Gumroad</a>, featured on <a href="https://fountn.design/resource/gumroad-design-system-community-beta/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Fountn</a> and <a href="https://swissdesign.systems/design-system-examples.html" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">swissdesign.systems</a>, and shown at Gumroad’s <a href="https://www.youtube.com/watch?v=EscH4kMT3gM&t=608s" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Q3 2024 public board meeting</a>.<br /><br />I also contributed implementation PRs that matched Figma and Storybook naming for pills, corrected the balance of the pill icon, and standardised alert typography.',
      },
    ],
  },
  {
    slug: "gumroad-tipping",
    title: "Tipping",
    company: "Gumroad",
    year: "2024",
    thumbnail: "/assets/tipping-preview.svg",
    description:
      'Gumroad asked creators a simple question on Twitter: tipping, yes or no? Yes received the largest share of 377 votes. Less than three days later, tipping was live.',
    sections: [
      {
        type: "text",
        content:
          '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You said yes. Tipping is here! <a href="https://t.co/tkmxVFUrMb">https://t.co/tkmxVFUrMb</a></p>&mdash; Gumroad (@gumroad) <a href="https://twitter.com/gumroad/status/1822260682198311396?ref_src=twsrc%5Etfw">August 10, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
      },
      {
        type: "text",
        heading: "The context",
        content:
          '<p class="mb-5">Tipping was proposed by Sahil, Gumroad’s CEO. Gumroad was looking for new ways to increase GMV, and this was one of the features we decided to build. At that point, success mainly meant increasing GMV.</p><p>I was the designer responsible for the experience. Gumroad was a small team, so I worked very closely with Sahil throughout. I explored possible approaches with another designer, then created the prototype and designed the UI.</p>',
      },
      {
        type: "text",
        heading: "The first release",
        content:
          '<p class="mb-5">I designed the tipping flow as part of the existing checkout, adding preset options and a custom amount directly before the pay button. The first version offered no tip, 10%, 20%, and a custom amount.</p><p>My initial recommendation was not to make tipping feel like an obligation. I come from a culture where tipping isn’t really part of everyday transactions, and a default 20% tip felt like it could put some pressure on customers. Sahil, coming from a US context where tipping is much more common, preferred 20% as the default. Since the main goal was to increase GMV, we went with it for the first release.</p>',
      },
      {
        type: "text",
        heading: "What changed",
        content:
          '<div class="mb-5"><p class="mb-5">With 20% selected by default, tips increased GMV by around 4.5%. But after the launch, we started hearing from some creators who weren’t happy with the way tipping was presented. That led to a conversation with Sahil, and we agreed that while increasing GMV was important, listening to creators was more important than maximizing the lift.</p><p class="mb-5">We changed the default to “No tip”, which reduced the lift to around 0.7%.</p><p>I also suggested changing the tip amounts from 10% and 20% to 15%, 20%, and 25%, with “No tip” as the default. The idea was to make tipping feel less aggressive. I also thought that moving the lowest option from 10% to 15% might slightly increase the average tip, although we didn’t have evidence for that.</p></div><p>Creators began finding unexpected tips in their Gumroad account balances; some even thought there was a bug. Soon, a user shared their experience <a href="https://harnarayan.medium.com/gumroad-tipping-the-best-feature-726e162ebaea" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">on Medium</a>.</p>',
      },
      {
        type: "image",
        content:
          '/assets/customtip.png',
        caption: "Custom tip",
      },
      {
        type: "text",
        content:
          '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Looks like I am getting tipped at Gumroad! 💸<br><br>First I noticed I am getting sales for $17.99 and not $14.99. I thought something is wrong.<br><br>But it&#39;s just people giving me $3 tips😅<br><br>And just today I got a $5 dollar tip on my $50 book.<br><br>Nice little feature to help creators. Thanks…</p>&mdash; Josef Strzibny (@strzibnyj) <a href="https://twitter.com/strzibnyj/status/1827539962583249026?ref_src=twsrc%5Etfw">August 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
      },
    ],
  },
  {
    slug: "gumroad-more-like-this",
    title: "More like this",
    company: "Gumroad",
    year: "2023",
    thumbnail: "/assets/morelikethis-preview.svg",
    description:
      'Gumroad creators wanted a way to recommend other products on their product pages.',
    sections: [
      {
        type: "image",
        content:
          '/assets/morelikethis.png',
        caption: "More like this in the content editor",
      },
      {
        type: "text",
        heading: "What I did",
        content:
          '<p class="mb-5">My first approach gave creators a lot of control. They could choose how recommendations were displayed and manually select which products to show. It was flexible, but it felt like a lot of setup for something that should be fairly simple.</p><p class="mb-5">The layout stayed the same, and instead of choosing individual products, creators only had to decide where recommendations could come from: their own products, their own and affiliated products, or Gumroad’s affiliate catalogue. Gumroad handled the rest.</p><p>I built the prototype, designed the UI and implemented the entire frontend myself, while an engineer worked on the backend.</p>',
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          'The simpler version meant less setup for creators and a quick way to ship the feature and see if people actually needed more control. After launch, we received positive feedback from creators using it.',
      },
    ],
  },
  {
    slug: "gumroad-team-members",
    title: "Team members",
    company: "Gumroad",
    year: "2023",
    thumbnail: "/assets/teams-preview.svg",
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
    slug: "daylight-calculator",
    title: "Daylight Calculator",
    company: "White Arkitekter",
    year: "2023",
    thumbnail: "/assets/daylight-preview.svg",
    description:
      '<a href="https://whitearkitekter.com/wisedaylight/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">White Arkitekter</a> is a Swedish architecture firm. They had developed a daylight prediction method and an early version of a tool, WISE_daylight, that could estimate whether a room would meet the Swedish daylight requirements using a few parameters.<br /><br />They wanted to make the tool more useful as part of an architect’s workflow. The goal was a demo that could show the department what the tool could become and help them decide whether it was worth investing in building it. I had one week to design it.',
    sections: [
      {
        type: "image",
        content:
          '/assets/daylightcalculator.jpg',
        caption: "Daylight assessment across an urban layout",
      },
      {
        type: "text",
        heading: "How I worked",
        content:
          '<div class="mb-5"><p class="mb-5">The project came through an architect who built tools for other architects there. On the first day, he explained how the method worked, how architects would use it, and what was difficult about the tools they were using. I spent the rest of the day looking at existing architecture tools to understand their conventions.</p><p>On days two and three, I made quick designs so we had something concrete to discuss rather than trying to define everything first. We used them in the second meeting to narrow the scope.</p></div><p>The tool had two types of calculations: a quick estimation and a full simulation. The simulation was slower, more expensive, and involved a review by an architect. It made more sense at the end of a project, when you need to prove the building meets the regulations. The estimation was more useful earlier, when architects are changing the design all the time, so that was what we focused on.</p>',
      },
      {
        type: "text",
        heading: "What I designed",
        content:
          '<p class="mb-5">The parts you need to get to an estimation and understand it:</p><ul class="list-disc pl-5 space-y-2"><li>Creating a project.</li><li>Uploading a model and seeing that it was being processed.</li><li>Checking which layers and objects were valid, so the architect could fix the model before running anything again.</li><li>Showing the results on the 3D model, with colors for each level.</li><li>Hovering over a room to see why it scored low and what you could change, like the room depth or the window size.</li></ul><p class="mt-5">A lot of these parts weren’t defined at the beginning, so I had to figure them out as we went.</p>',
      },
      {
        type: "image",
        content:
          '/assets/whiteblog1.png',
        caption: "Daylight Calculator interface explorations",
      },
      {
        type: "text",
        heading: "Outcome",
        content:
          'I kept checking designs with the architect during the week. He was going to use the tool himself, so if something didn’t make sense he would tell me straight away. After the second meeting I iterated on the designs and handed everything over in a final meeting. A developer then built it as a web app based on my designs.',
      },
    ],
  },
  {
    slug: "gumroad-checkout-redesign",
    title: "Checkout Redesign",
    company: "Gumroad",
    year: "2022",
    thumbnail: "/assets/gumroad-preview.svg",
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
          'I redesigned the flow around those issues. Gifting moved closer to the product being gifted. The payment page was restructured so completing the payment became the final step, and the payment UI was updated to work responsively. I moved tipping before the total so the final amount was clear. I designed the update, then implemented the page restructure and <a href="https://github.com/antiwork/gumroad/pull/3069" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">payment UI</a> in production.',
      },
      {
        type: "image",
        content: "/assets/gumroad-checkout2026.png",
        caption: "Checkout update 2025",
      },
    ],
  },
  {
    slug: "buidlguidl",
    title: "BuidlGuidl",
    company: "Ethereum community",
    year: "2022",
    thumbnail: "/assets/buidlguidl-preview.svg",
    description:
      '<a href="https://buidlguidl.com/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">BuidlGuidl</a> is a curated community of Ethereum builders creating products, prototypes, and tutorials for the web3 ecosystem. In March 2022, I spent a week designing parts of their app, and the designs were implemented in the <a href="https://app.buidlguidl.com/builders" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">BuidlGuidl app</a>.',
    sections: [
      {
        type: "text",
        heading: "What I designed",
        content:
          '<ul class="list-disc pl-5 space-y-2"><li>The MetaMask login.</li><li>The builders page, where you can browse everyone in the community.</li><li>The builds page, listing the projects builders had shipped.</li><li>The challenges pages, from the list to each individual challenge.</li><li>The profile page, with each builder’s activity.</li></ul>',
      },
      {
        type: "image",
        content: "/assets/buidlguidlblog1.png",
        caption: "Challenges, builders, builds and profile pages",
      },
    ],
  },
  {
    slug: "nectar-design-system",
    title: "Nectar, Design System",
    company: "Beezy",
    year: "2022",
    thumbnail: "/assets/nectar-preview.svg",
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
          'I contributed to components like <a href="https://liferay.design/lexicon/core-components/buttons/action-buttons/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Action Buttons</a>, <a href="https://liferay.design/lexicon/core-components/dual-listbox/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Dual Listbox</a>, <a href="https://liferay.design/lexicon/core-components/keys/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Keys</a>, <a href="https://liferay.design/lexicon/core-components/labels/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Labels</a>, and <a href="https://liferay.design/lexicon/core-components/modals/" target="_blank" rel="noopener noreferrer" class="underline [text-decoration-thickness:0.08em] decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Modals</a>, and designed new icons. Small pieces of a big system, but that\'s where I learned that good design is mostly invisible and almost always collaborative.<br /><br />I also wrote the documentation for these components in the design site\'s codebase, with <a href="https://github.com/liferay-design/design.liferay.com/pulls?q=is%3Apr+author%3Alaugardie+is%3Amerged" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">15 merged pull requests</a>.',
      },
      {
        type: "text",
        heading: "Adoption",
        content:
          'Lexicon is open source, so its reach goes beyond Liferay. The <a href="https://www.figma.com/community/file/961581638760900307/lexicon-design-system" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Lexicon Figma file</a> has more than 5.8k users, and the <a href="https://www.figma.com/community/file/869683830747037733/lexicon-icons" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Lexicon Icons file</a>, where I created and improved icons, has more than 7k. <a href="https://github.com/liferay/clay" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Clay</a>, its implementation, has over 500 forks on GitHub.<br /><br />It has also been featured in design system collections like <a href="https://adele.uxpin.com/liferay-lexicon" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Adele by UXPin</a> and <a href="https://www.designsystems.com/open-design-systems/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">designsystems.com</a>.',
      },
    ],
  },
];
