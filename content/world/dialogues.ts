// Conversations for places in /world. Each dialogue is a small graph of
// messages.

// An option either leads to another message (next) or opens a link (href).
export type DialogueOption =
  | { label: string; next: string; href?: never }
  | { label: string; href: string; next?: never };

export type DialogueMessage = {
  text: string;
  options: DialogueOption[];
};

export type Dialogue = {
  id: string;
  label: string;
  start: string;
  messages: Record<string, DialogueMessage>;
};

const backToStart: DialogueOption = { label: "← Something else", next: "intro" };

export const homeDialogue: Dialogue = {
  id: "home",
  label: "CASITA",
  start: "intro",
  messages: {
    intro: {
      text: "Hey, I'm Casita. Laura lives here in Lagos with her husband Daniel and their son Diego. This is where she works, makes things, and occasionally gets interrupted by a very important drawing.",
      options: [
        { label: "What does Laura do?", next: "work" },
        { label: "What's life like here?", next: "life" },
        { label: "Can I say hi to her?", next: "hi" },
      ],
    },
    work: {
      text: "I design digital products, from the first messy idea to the details that ship. Sometimes I get into the code, too.",
      options: [backToStart],
    },
    life: {
      text: "Family life, working from home, and learning to surf. I'm much better at moving pixels than catching waves.",
      options: [backToStart],
    },
    hi: {
      text: "Of course. I handle the welcoming. She handles the emails.",
      options: [
        { label: "Email Lau ↗", href: "mailto:hi@laugardie.com" },
        { label: "Find her on LinkedIn ↗", href: "https://www.linkedin.com/in/laugardie/" },
        { label: "Something else.", next: "intro" },
      ],
    },
  },
};
