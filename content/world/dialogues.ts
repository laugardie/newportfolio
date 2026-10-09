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
      text: "She’s working on a fertility app, Everground for workouts, and Habits for tracking the things you want to keep doing. There’s also Tatai, her children’s colouring books, and this little world. I get a front-row seat to all of it.",
      options: [
        { label: "Does she code too?", next: "code" },
        { label: "Can I talk to her about a project?", next: "hi" },
        somethingElse,
      ],
    },
    life: {
      text: "Laura works from here, trains with Daniel, and has a bit of a homemade pizza obsession. There are kettlebells and children’s drawings. It’s a home first. The office fits around it.\n\nWhen she’s out, there’s a good chance she’s at the beach. She’s learning to surf. I’d go with her, but… house.",
      options: [
        { label: "Wait, homemade pizza?", next: "pizza" },
        { label: "What’s she making besides pizza?", next: "making" },
        somethingElse,
      ],
    },
    pizza: {
      text: "Yes. One of the perks of being Laura’s house. I can’t eat it, which feels like a fairly serious design flaw.",
      options: [
        { label: "I came for the portfolio, now I’m hungry. ↗", href: PORTFOLIO },
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

// Draft copy, waiting on Laura's review.
export const beachDialogue: Dialogue = {
  id: "beach",
  label: "BOARDIE",
  start: "welcome",
  messages: {
    welcome: {
      text: "Oh, hi. I’m Boardie, Laura’s surfboard. Most days I lean on this rock and wait for her to finish work. She’s learning to surf, so we spend a lot of time together in the white water.",
      options: [
        { label: "How’s she getting on?", next: "progress" },
        { label: "Why surfing?", next: "why" },
        { label: "Where’s Laura now?", next: "where" },
      ],
    },
    progress: {
      text: "Honestly? Better every time. She paddles, pops up, falls off, laughs, and tries again. The ocean gives very direct feedback. I just try to stay the right way up.",
      options: [
        { label: "Sounds a bit like her work.", next: "work" },
        somethingElse,
      ],
    },
    why: {
      text: "Lagos has beaches like this one: rocks, little caves, and water that changes colour every hour. Live this close to the sea and it starts asking questions. Also, there are no screens out there. Casita takes that personally.",
      options: [
        { label: "How’s she getting on?", next: "progress" },
        { label: "Where’s Laura now?", next: "where" },
        somethingElse,
      ],
    },
    work: {
      text: "Same habit, different medium. Try something, see what happens, adjust. Casita knows more about the design side. I mostly know about waves.",
      options: [
        { label: "Show me her work. ↗", href: PORTFOLIO },
        { label: "Where’s Laura now?", next: "where" },
        somethingElse,
      ],
    },
    where: {
      text: "Probably up at Casita, working on something. You can say hi from here, though. Tell her the swell looks good.",
      options: [
        { label: "Email Laura. ↗", href: EMAIL },
        { label: "Find her on LinkedIn. ↗", href: LINKEDIN },
        somethingElse,
      ],
    },
  },
};
