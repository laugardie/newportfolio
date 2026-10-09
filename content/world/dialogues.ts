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
      text: "Hey, I’m Casita. Lau lives here in Lagos with her husband Daniel and their son Diego. This is where she works, makes things, and occasionally gets interrupted by a very important drawing.",
      options: [
        { label: "What does Lau do?", next: "work" },
        { label: "What’s life like here?", next: "life" },
        { label: "Can I say hi to her?", next: "hi" },
      ],
    },
    work: {
      text: "She’s a product designer. She figures out how things should work, designs the details, and gets into the code to help bring them to life.\n\nI provide the walls and somewhere to plug things in.",
      options: [
        { label: "Show me her work. ↗", href: PORTFOLIO },
        { label: "Let me see her GitHub. ↗", href: GITHUB },
        { label: "Can I talk to her about a project?", next: "hi" },
        somethingElse,
      ],
    },
    life: {
      text: "A lot gets made here. Digital things by Lau, drawings by Diego. His work usually makes it onto the wall faster.\n\nThere’s also training with Daniel and a fairly serious homemade pizza habit. Between the kettlebells and the toys, walking across the room is sometimes a workout of its own.",
      options: [
        { label: "Wait, homemade pizza?", next: "pizza" },
        { label: "Where’s Lau now?", next: "where" },
        somethingElse,
      ],
    },
    hi: {
      text: "Of course. Have a project in mind, a question, or just fancy saying hello?\n\nI’d pass your message on myself, but my keyboard is a doorstep.",
      options: [
        { label: "Email Lau. ↗", href: EMAIL },
        { label: "Find her on LinkedIn. ↗", href: LINKEDIN },
        somethingElse,
      ],
    },
    pizza: {
      text: "Yes. You might have spotted the oven outside. It gets considerably more compliments than my architecture.\n\nGo say hello. Ask about the pizza.",
      options: [
        { label: "Back to home life.", next: "life" },
        somethingElse,
      ],
    },
    where: {
      text: "If she’s not here, try the beach. Boardie usually knows what she’s up to.\n\nI’d come with you, but I’m quite attached to this spot.",
      options: [
        { label: "Who’s Boardie?", next: "boardie" },
        somethingElse,
      ],
    },
    boardie: {
      text: "The surfboard down by the water. Very patient. Has a lot to say for someone with no mouth.\n\nYou two should meet.",
      options: [somethingElse],
    },
  },
};

export const beachDialogue: Dialogue = {
  id: "beach",
  label: "BOARDIE",
  start: "welcome",
  messages: {
    welcome: {
      text: "Hey, I’m Boardie. Lau’s learning to surf. I’m learning to be patient.\n\nThis is our little corner for things she hasn’t figured out yet. Some involve code. Some involve falling into the Atlantic.",
      options: [
        { label: "What’s she learning?", next: "learning" },
        { label: "Can she actually surf?", next: "surf" },
        { label: "Why so many different things?", next: "why" },
      ],
    },
    learning: {
      text: "Surfing, building more of her own ideas in code, and learning about nutrition. Her browser tabs are quite a mix.\n\nThis little world is part of it. Every new thing she wants to add becomes another thing to figure out.",
      options: [
        { label: "Tell me about the surfing.", next: "surf" },
        { label: "Nutrition?", next: "nutrition" },
        { label: "What’s she building?", next: "building" },
        somethingElse,
      ],
    },
    surf: {
      text: "She’s learning. We’ve had some standing-up moments. I try not to get too excited.\n\nMostly, we paddle out, give it a go, and get very familiar with the water.",
      options: [
        { label: "What else is she learning?", next: "learning" },
        somethingElse,
      ],
    },
    why: {
      text: "Usually, she wants to understand something. Then she reads about it, tries it, and ends up with more questions than she started with.\n\nI have one subject. Waves. Keeps things manageable.",
      options: [
        { label: "Nutrition, for example?", next: "nutrition" },
        { label: "What’s she building?", next: "building" },
        somethingElse,
      ],
    },
    nutrition: {
      text: "She’s been digging into nutrition, especially fertility and PCOS. Reading, asking questions, and trying to understand the science behind the advice.\n\nI don’t contribute much to those conversations. My experience is mostly with salt water.",
      options: [
        { label: "Is she making something with that?", next: "building" },
        { label: "What else is she learning?", next: "learning" },
        somethingElse,
      ],
    },
    building: {
      text: "Take a wander over to the little vegetable garden. Each patch has one of her small projects growing in it, including a nutrition app she’s working on.\n\nI’d show you around, but they’ve asked me to keep the salt water away from the plants.",
      options: [somethingElse],
    },
  },
};
