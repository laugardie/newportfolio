// Conversations for places in /world. Each dialogue is a small graph of
// messages; options point at the id of the message they lead to.

export type DialogueOption = {
  label: string;
  next: string;
};

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
  label: "HOME",
  start: "intro",
  messages: {
    intro: {
      text: "Hey, I'm Laura. Welcome to my little corner of Lagos. I live here with my husband Daniel and our son Diego. It's also where I work.",
      options: [
        { label: "What do you do?", next: "work" },
        { label: "What's life like here?", next: "life" },
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
  },
};
