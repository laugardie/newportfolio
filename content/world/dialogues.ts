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

const PORTFOLIO = "/";
const GITHUB = "https://github.com/laugardie";
const EMAIL = "mailto:hi@laugardie.com";
const LINKEDIN = "https://www.linkedin.com/in/laugardie/";

const somethingElse: DialogueOption = { label: "Something else.", next: "welcome" };

export const homeDialogue: Dialogue = {
  id: "home",
  label: "CASITA",
  start: "welcome",
  messages: {
    welcome: {
      text: "Hey, I’m Casita. Laura lives here in Lagos with her husband Daniel and their son Diego. This is where she works, makes things, and occasionally gets interrupted by a very important drawing.",
      options: [
        { label: "What does Laura do?", next: "work" },
        { label: "What’s life like here?", next: "life" },
        { label: "Can I say hi to her?", next: "hi" },
      ],
    },
    work: {
      text: "She’s a product designer. She works out how things should work, designs the details, and gets into the code to help bring them to life. She’s worked on Gumroad, Beezy and Liferay. She loves Design Systems. I mostly provide the walls and somewhere to plug things in.",
      options: [
        { label: "Has she always been a designer?", next: "teacher" },
        { label: "What’s she making now?", next: "making" },
        { label: "Show me her work. ↗", href: PORTFOLIO },
        somethingElse,
      ],
    },
    teacher: {
      text: "She used to teach primary school. Four years of explaining things to small humans before moving into product design. Different audience, same concern: “Does this actually make sense to anyone else?”",
      options: [
        { label: "What’s she making now?", next: "making" },
        { label: "I’d like to see her work. ↗", href: PORTFOLIO },
        somethingElse,
      ],
    },
    making: {
      text: "A fertility app, a workout app called Everground, and this little world you’re standing in. She also makes children’s colouring books under the name Tatai. I was meant to be a house. Apparently, I’m a project now too.",
      options: [
        { label: "Does she code too?", next: "code" },
        { label: "Can I talk to her about a project?", next: "hi" },
        somethingElse,
      ],
    },
    life: {
      text: "Laura works from here, trains with Daniel, and has a bit of a homemade pizza obsession. There are kettlebells and children’s drawings. It’s a home first. The office fits around it.\n\nWhen she’s out, there’s a good chance she’s at the beach. She’s learning to surf. I’m more of a stay-on-land type.",
      options: [
        { label: "Wait, homemade pizza?", next: "pizza" },
        { label: "What’s she making besides pizza?", next: "making" },
        somethingElse,
      ],
    },
    pizza: {
      text: "Yes. One of the perks of being Laura’s house. I can’t eat it, which feels like a fairly serious design flaw.",
      options: [
        { label: "I came for the portfolio, now I’m hungry.", next: "making" },
        { label: "I should say hi to her.", next: "hi" },
        somethingElse,
      ],
    },
    code: {
      text: "She does. She’s worked directly in React and Tailwind alongside engineers, taking designs through to the actual product. She likes being involved when the thing gets built. Moving a button in Figma is only the beginning.",
      options: [
        { label: "Let me see her GitHub. ↗", href: GITHUB },
        { label: "Show me the finished work. ↗", href: PORTFOLIO },
        { label: "Can I talk to her about a project?", next: "hi" },
        somethingElse,
      ],
    },
    hi: {
      text: "Of course. Have a project in mind, a question, or just fancy saying hello? Send her a message. I’d pass it on myself, but my keyboard is a doorstep.",
      options: [
        { label: "Email Laura. ↗", href: EMAIL },
        { label: "Find her on LinkedIn. ↗", href: LINKEDIN },
        somethingElse,
      ],
    },
  },
};
