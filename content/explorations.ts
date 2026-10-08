import type { ProjectSection } from "./projects";

export type Exploration = {
  slug: string;
  name: string;
  company: string;
  year: string;
  description: string;
  sections: ProjectSection[];
};

export const explorations: Exploration[] = [
  {
    slug: "avatars",
    name: "Avatars",
    company: "Illustration System",
    year: "2021",
    description:
      "Avatars is a playful doodle-based illustration system I designed and built in Figma. The goal was to turn hand-drawn characters into a flexible, mix-and-match component system.",
    sections: [
      {
        type: "text",
        heading: "What I explored",
        content:
          "I began by sketching a wide range of faces, hairstyles, outfits, and expressions using a consistent head template to maintain alignment. After selecting the strongest variations, I vectorised each element in Illustrator and separated them into modular parts.<br /><br />In Figma, I structured everything as components with variants, allowing seamless swapping of expressions, hair, and clothing. The result is a scalable avatar system capable of generating countless unique combinations.",
      },
      {
        type: "image",
        content: "/assets/avatarsblog3.gif",
        caption: "Final avatar system",
      },
      {
        type: "text",
        heading: "The learnings",
        content:
          "This project strengthened my ability to think in systems, balancing creative expression with structure and reusability.",
      },
    ],
  },
  {
    slug: "goeat",
    name: "Goeat",
    company: "UX/UI Design",
    year: "2019",
    description:
      'Goeat was my final project during Ironhack’s UX/UI Bootcamp. Over 10 days, I designed an app to help travelers discover authentic local dishes while bridging cultural and language gaps. The project won 2nd place at Ironhack’s Madrid Hackshow in July 2019. You can watch <a href="https://www.youtube.com/watch?v=9el1pilj1lA" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">my presentation</a> on Ironhack’s YouTube channel.',
    sections: [
      {
        type: "text",
        heading: "What I designed",
        content:
          'I designed an app that allows users to:<br/><br/>\n<ul style="padding-left: 1.1em; margin: 0; list-style-type: disc; list-style-position: outside;">\n  <li style="margin-bottom: 0.25em;">Discover traditional dishes in any city using geo-localization.</li>\n  <li style="margin-bottom: 0.25em;">Get restaurant recommendations and street food tips from fellow travelers.</li>\n  <li style="margin-bottom: 0.25em;">Access menu translations, audio pronunciations, and ingredient/allergen info.</li>\n  <li>Save favorites and track points for rewards.</li>\n</ul>',
      },
      {
        type: "image",
        content: "/assets/goeat1.png",
        caption: "A sneak peek of the Goeat app",
      },
      {
        type: "text",
        heading: "What I learned",
        content:
          'This project taught me to juggle UX research, rapid prototyping, and interface design within a demanding timeline. I realized how crucial it is to genuinely empathize with users to tackle meaningful pain points, and how small touches can dramatically enhance the experience. Seeing the project through from discovery to polished prototype deepened my appreciation for a rigorous, user-centered design process.<br /><br />If you’re interested in a deeper dive, you can read the complete <a href="https://medium.com/@laugardie/goeat-c5928da852cd" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150 [text-decoration-thickness:0.08em]">case study on Medium</a>.',
      },
    ],
  },
  {
    slug: "whatsapp-polls",
    name: "Whatsapp polls",
    company: "Feature Design",
    year: "2019",
    description:
      "During Ironhack’s UX/UI Bootcamp, my colleague Miguel Durán Pardo and I collaborated on a 4-day sprint to design WhatsApp Polls, before WhatsApp introduced the feature. The goal was to simplify group decision-making in chats, reducing clutter and confusion.",
    sections: [
      {
        type: "text",
        heading: "What we designed",
        content:
          'We designed a poll feature that allows users to:<br/><br/>\n<ul style="padding-left: 1.1em; margin: 0; list-style-type: disc; list-style-position: outside;">\n  <li style="margin-bottom: 0.25em;">Create polls with single or multiple-choice options.</li>\n  <li style="margin-bottom: 0.25em;">Vote and edit their choices easily.</li>\n  <li style="margin-bottom: 0.25em;">View active and past polls in a dedicated screen.</li>\n  <li>Set anonymous or public votes.</li>\n</ul>',
      },
      {
        type: "image",
        content: "/assets/whatsappblog2.png",
        caption: "A sneak peek of the poll feature",
      },
      {
        type: "text",
        heading: "What happened next",
        content:
          'We published the concept in <a href="https://blog.prototypr.io/whatsapp-polls-c7c8789aaf26" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">Prototypr</a> in July 2019. Over the next few years, other designers kept exploring the same idea in their own case studies, like this one on <a href="https://uxplanet.org/whatsapp-poll-a-case-study-of-a-conceptual-feature-13021bb619a" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">UX Planet</a>.<br /><br />In November 2022, WhatsApp released polls, first reported by <a href="https://wabetainfo.com/whatsapp-for-ios-22-23-76-whats-new/" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">WABetaInfo</a>. It shared a lot with what we had prototyped three years earlier.',
      },
      {
        type: "text",
        heading: "What I learned",
        content:
          'This project taught me how to balance UX research, rapid prototyping, and UI design under tight deadlines. I learned the importance of empathizing with users to solve real pain points, and how subtle details can make a big difference in the experience. Working through the full product flow, from research to high-fidelity prototype, reinforced the value of structured design thinking.<br /><br />If you want a deeper look at the project, you can read the full <a href="https://medium.com/@laugardie/whatsapp-polls-c7c8789aaf26" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150 [text-decoration-thickness:0.08em]">case study on Medium</a>.',
      },
    ],
  },
];
