// Conversations for places in /world. Each dialogue is a small graph of
// messages.

// An option leads to another message (next), opens a link (href) or closes
// the conversation (close).
export type DialogueOption =
  | { label: string; next: string; href?: never; close?: never }
  | { label: string; href: string; next?: never; close?: never }
  | { label: string; close: true; next?: never; href?: never };

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

// Small bets. A project's link is only offered when it has one.
const PROJECT_URLS: { nutrition?: string; everground?: string; habits?: string; tatai?: string } = {
  everground: "https://everground.app/",
  habits: "https://tryhabits.app",
  tatai: "https://www.amazon.es/stores/author/B0H7SPB314?ingress=0&visitId=abe2539c-bbe6-4c53-88a0-a4d3e46984f2",
};

const somethingElse: DialogueOption = { label: "Something else.", next: "welcome" };

const link = (label: string, href: string | undefined): DialogueOption[] => (href ? [{ label, href }] : []);

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

// The garden's greenhouse. Sprout is the only one in the garden you talk to,
// so it tells you about every bed too.
const anotherBed: DialogueOption = { label: "Tell me about another bed.", next: "sprout_growing" };

export const sproutDialogue: Dialogue = {
  id: "sprout",
  label: "SPROUT",
  start: "sprout_welcome",
  messages: {
    sprout_welcome: {
      text: "Hey, I’m Sprout. Lau’s small bets start here.\n\nUsually with ‘I wish this existed.’ Then a sketch, a rough version, and a suspicious number of adjustments.",
      options: [
        { label: "What’s a small bet?", next: "sprout_small_bet" },
        { label: "What’s growing here?", next: "sprout_growing" },
        { label: "Who drew on your window?", next: "sprout_drawing" },
        { label: "I’ll have a look around.", close: true },
      ],
    },
    sprout_small_bet: {
      text: "An idea she cares enough about to try. Something of her own, where she gets to make the decisions and find out what happens.\n\nThe ‘small’ part is meant to keep things manageable. I occasionally have to remind her.",
      options: [
        { label: "Do they all work out?", next: "sprout_experiments" },
        { label: "Something else.", next: "sprout_welcome" },
      ],
    },
    sprout_growing: {
      text: "Four little experiments, one in each bed: a nutrition app, Everground for workouts, Habits, and Tatai colouring books.\n\nAsk me about any of them. I keep an eye on all four.",
      options: [
        { label: "The carrots: the nutrition app.", next: "nutrition_welcome" },
        { label: "The tomatoes: Everground.", next: "everground_welcome" },
        { label: "The seedlings: Habits.", next: "habits_welcome" },
        { label: "The pumpkins: Tatai.", next: "tatai_welcome" },
        { label: "Something else.", next: "sprout_welcome" },
      ],
    },
    sprout_experiments: {
      text: "We’ll see. That’s the bet.\n\nPutting an idea out into the world is how she finds out whether it makes sense to anyone else.\n\nI mostly check that she’s watered it.",
      options: [
        { label: "What’s growing here?", next: "sprout_growing" },
        { label: "Something else.", next: "sprout_welcome" },
      ],
    },
    sprout_drawing: {
      text: "Diego. He decided I looked a bit plain and fixed it.\n\nIt’s the only thing in this garden nobody is allowed to water.",
      options: [
        { label: "What’s growing here?", next: "sprout_growing" },
        { label: "Something else.", next: "sprout_welcome" },
      ],
    },
    nutrition_welcome: {
      text: "The carrots’ bed is a nutrition app Lau’s working on, focused on eating well while trying to conceive.\n\nMeal plans, recipes, and shopping lists. The carrots approve of being included.",
      options: [
        { label: "Why did she start it?", next: "nutrition_why" },
        ...link("Take a closer look. ↗", PROJECT_URLS.nutrition),
        anotherBed,
      ],
    },
    nutrition_why: {
      text: "She wanted to make the everyday part easier: deciding what to cook, buying what you need, and putting a meal together.\n\nLess figuring out dinner from scratch. More having a plan you can actually use.",
      options: [{ label: "Back to the nutrition app.", next: "nutrition_welcome" }, anotherBed],
    },
    everground_welcome: {
      text: "The tomatoes are Everground, a workout app being built by Lau’s husband, Daniel. She helps with the design and contributes a few pull requests along the way.\n\nA shared interest in training has apparently become a shared interest in discussing buttons.",
      options: [
        { label: "What does it do?", next: "everground_about" },
        ...link("Take a closer look. ↗", PROJECT_URLS.everground),
        anotherBed,
      ],
    },
    everground_about: {
      text: "It’s a place to find workouts, save favourites, and organise your training.\n\nDaniel’s building it. Lau helps shape how it looks and works. I provide the tomatoes. Everyone has a role.",
      options: [{ label: "Back to Everground.", next: "everground_welcome" }, anotherBed],
    },
    habits_welcome: {
      text: "The seedlings are Habits, a project for tracking the things you want to keep doing.\n\nSmall actions, repeated. A familiar concept around here.",
      options: [
        { label: "Why the seedlings?", next: "habits_seedlings" },
        ...link("Take a closer look. ↗", PROJECT_URLS.habits),
        anotherBed,
      ],
    },
    habits_seedlings: {
      text: "One enthusiastic watering won’t do it. You have to keep showing up.\n\nThese little ones seemed like the right neighbours for a habit tracker.",
      options: [{ label: "Back to Habits.", next: "habits_welcome" }, anotherBed],
    },
    tatai_welcome: {
      text: "The pumpkins are Tatai, Lau’s collection of children’s colouring books. Dinosaurs, insects, and sea creatures, waiting for someone with crayons.\n\nThe pumpkins asked to be in the next one.",
      options: [
        { label: "What’s inside the books?", next: "tatai_books" },
        ...link("See the books. ↗", PROJECT_URLS.tatai),
        anotherBed,
      ],
    },
    tatai_books: {
      text: "Pages for children to colour and make their own.\n\nA dinosaur can be purple. An octopus can be orange. I try to allow the same freedom here, but the tomatoes are quite traditional.",
      options: [{ label: "Back to Tatai.", next: "tatai_welcome" }, anotherBed],
    },
  },
};
