import Footer from "@/app/Footer";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import NextBack from "@/components/NextBack";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import NumberedList from "@/components/design system/NumberedList";
import NumberedListItem from "@/components/design system/NumberedListItem";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import Title from "@/components/design system/Title";
import Image from "next/image";
import Link from "next/link";

export default function Goeat() {
  return (
    <div className="bg-background min-h-screen font-figtree [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Header */}
      <div className="w-full border-b border-border">
        <header className="container mx-auto max-w-screen-xl">
          <div className="border-x border-border flex justify-between items-center">
            <Link className="cursor-pointer" href="/">
              <div className="pl-1 hover:bg-white/70 hover:text-black"><Logo /></div>
            </Link>
            <MenuDesktop className="hidden lg:flex" />
            <MenuPhone className="flex lg:hidden" />
          </div>
        </header>
      </div>

      {/* Cover image section */}
      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          <Image
            src="/assets/goeat-cover-mobile.png"
            alt="Goeat app cover image" 
            width={1280}
            height={720}
            className="w-full sm:hidden"
          />
          <Image 
            src="/assets/goeat.png"
            alt="Goeat app cover image"
            width={1280}
            height={720}
            className="hidden sm:flex w-full"
          />
        </div>
      </div>

      {/* Introduction section */}
      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          <div className="px-12 pt-24 py-6">
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              <label className="text-base font-medium font-jetbrains-mono">CASE STUDY</label>
              <h1 className="text-5xl font-medium">
                Goeat<br />
                <span className="font-cormorant italic">Discover the taste of the world</span>
              </h1>
              <Paragraph>
                Goeat was my final project during the UX/UI Bootcamp at Ironhack. It
                was elected as a finalist and earned the privilege of being
                showcased at Madrid{"'"}s{" "}
                <a
                  className="underline hover:text-accent"
                  href="https://www.youtube.com/watch?v=9el1pilj1lA&t=8s"
                >
                  Hackshow
                </a>
                . The entire project spanned a period of 10 days, with 5 dedicated
                to UX research and design, and the remaining 5 focused on bringing
                the UI to life.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          {/* Project details section */}
          <div className="px-12 py-6">
            <div className="max-w-3xl mx-auto grid grid-cols-4 gap-4">
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Role</h3>
                <p className="text-sm font-medium">Designer</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                <p className="text-sm font-medium">Travel app</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                <p className="text-sm font-medium">September 9th, 2019</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">10 days</p>
              </div>
            </div>
          </div>
          {/* The problem section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
              <Title>The problem</Title>
              <Paragraph>Tourism is one of the world biggest economic drivers. During 2018,
              it grew 6%, reaching 1400 million travelers worldwide, according to
              the UNWTO – United Nations World Tourism Organization.
              </Paragraph>
              <Paragraph>
              Within this sector, gastronomic tourism is a growing market.
              Gastronomy is one of the main reasons tourists chose their
              destinations, and it represents 1/3 of the total travel costs.
              However, there exists a cultural and linguistic gap that hinders the
              exploration and discovery of a country
              {"'"}s gastronomy.
              </Paragraph>
              </div>
            </div>
          </div>
          {/* The solution section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>The solution</Title>
                <Paragraph>Introducing Goeat, an innovative application designed to bridge this
                gap. Goeat empowers travelers to effortlessly discover and explore
                the traditional dishes of their chosen destinations, while also
                providing personalised recommendations for nearby restaurants where
                these culinary delights can be savoured.
                </Paragraph>
                <figure>
                  <Image
                  alt="Goeat app cover image"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  src="/assets/goeatblog1.png"
                  style={{ backgroundColor: 'white', objectFit: 'cover', width: 'auto', height: '100%' }}
                  className="rounded-lg border border-border"
                  />
                  <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                    A sneak peek of Goeat App
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          {/* Empathizing with Travelers section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Empathizing with Travelers</Title>
                <Paragraph>
                  To delve deeper into the problem at hand, I conducted a series of
                  surveys and interviews to tap into the insights of individuals who
                  have experienced the challenges firsthand. Five in-depth interviews
                  and a survey garnered a remarkable 101 responses, enabling me to
                  gain a profound understanding of the issue.
                </Paragraph>
                <Paragraph>
                  One respondent succinctly captured the sentiment shared by many
                  travelers:
                </Paragraph>
                <Quote>
                  When you venture to a destination with a vastly different culture,
                  the overwhelming variety of options leaves you clueless about what
                  to try.
                </Quote>
                <Paragraph>
                  Drawing from these surveys and interviews, I distilled the following
                  key points:
                </Paragraph>
                <Image
                  src="/assets/goeatblog2.png"
                  alt="Survey results"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Image
                  src="/assets/goeatblog3.png"
                  alt="Survey results"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
          {/* Define persona section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>User persona</Title>
                <Paragraph>
                  Meet Irene, a spirited explorer at 31 years young, who possesses an
                  insatiable curiosity for traveling and immersing herself in diverse
                  cultures. Her profound appreciation for authentic local experiences
                  stems from a deep belief that they offer a gateway to not only
                  intellectual understanding but also a sensory connection to the
                  culture she encounters. For Irene, there is an unwavering desire to 
                  try authentic local things.
                </Paragraph>
                <Image
                  src="/assets/goeatblog4.png"
                  alt="Irene, our persona"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
          {/* User journey section */}
          <div className="px-12 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-6">
              <Title>User Journey</Title>
              <Paragraph>
                To gain a deeper understanding of Irene{"'"}s perspective during her
                travels, I employed a User Journey approach, placing myself in her
                shoes every step of the way.
              </Paragraph>
              <Image
                src="/assets/goeatblog5.png"
                alt="User journey"
                width={0}
                height={0}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
                sizes="100vw"
                className="rounded-lg border border-border"
              />
              <Paragraph>
                Through the lens of empathy, we gain a clear understanding of Irene{"'"}s pain points, which our tool effectively addresses:
              </Paragraph>
              <BulletedList>
                <BulletedListItem>
                  <b>Time-consuming search for traditional food:</b> Irene finds
                  herself investing valuable time searching for authentic local
                  cuisine at her destination. The task of discovering truly
                  traditional dishes becomes a challenge.
                </BulletedListItem>
                <BulletedListItem>
                  <b>Language barriers and menu comprehension:</b> Upon arriving at
                  a restaurant, Irene is confronted with menus in unfamiliar
                  languages. This language barrier poses a significant hurdle,
                  making it difficult for her to comprehend the offerings and make
                  informed choices.
                </BulletedListItem>
                <BulletedListItem>
                  <b>Uncertainty surrounding ingredients and dishes:</b> With
                  limited knowledge of local ingredients and dishes, Irene faces the
                  dilemma of not knowing what to order. This uncertainty can lead to
                  ordering blindly.
                </BulletedListItem>
                <BulletedListItem>
                  <b>Unpleasant surprises and disappointment:</b> Unfortunately,
                  Irene occasionally encounters food with ingredients she dislikes,
                  leading to frustration. This disappointment tarnishes the joy she
                  seeks in savoring traditional cuisine.
                </BulletedListItem>
              </BulletedList>
              <Paragraph>
                By understanding and addressing these pain points, our tool strives
                to enhance Irene{"'"}s journey, offering a streamlined solution that
                simplifies her search for traditional food, breaks down language
                barriers, provides comprehensive information about ingredients and
                dishes, and ensures a more enjoyable and fulfilling dining
                experience.
              </Paragraph>
            </div>
          </div>
          </div>
          {/* Brainstorming the ultimate gastronomic experience section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Brainstorming the ultimate gastronomic experience</Title>
                <Paragraph>
                  As the design opportunities came into focus, I embarked on a
                  brainstorming journey to unlock the potential of our app, with
                  Irene{"'"}s gastronomic adventure in mind.
                </Paragraph>
                <Paragraph>
                  To guide this creative exploration, I posed the question:How might
                  we help Irene fully enjoy the tantalizing gastronomy of her
                  destination during her trip? This powerful inquiry propelled the
                  ideation process, leading to two dynamic rounds of brainstorming.
                </Paragraph>
                <Paragraph>
                  With a wealth of innovative ideas at hand, I then employed the
                  MOSCOW method to prioritize features for our Minimum Viable
                  Product (MVP). Here are the standout features that made the
                  cut.
                </Paragraph>
                <NumberedList>
                  <NumberedListItem>
                    <b>Geo-localization:</b> Leveraging the power of geolocation, our
                    app provides Irene with curated suggestions of traditional dishes
                    specific to the city she{"'"}s exploring, unlocking a world of
                    gastronomic wonders right at her fingertips.
                  </NumberedListItem>
                  <NumberedListItem>
                    <b>Nearby Restaurant Recommendations:</b> Seamlessly integrated
                    within the app, Irene receives tailored recommendations for nearby
                    restaurants that excel in serving the selected traditional dish,
                    guaranteeing an authentic and unforgettable dining experience.
                  </NumberedListItem>
                  <NumberedListItem>
                    <b>Street Food Insights from Fellow Travelers:</b> To add an extra
                    layer of adventure, our app harnesses the collective wisdom of
                    fellow travelers, offering recommendations for tantalizing street
                    food options that shouldn{"'"}t be missed, allowing Irene to
                    embark on a sensory journey through local flavors.
                  </NumberedListItem>
                  <NumberedListItem>
                    <b>Audio Pronunciation of Dish Names:</b> Understanding the
                    importance of language comprehension, we provide audio
                    pronunciations of dish names, enabling Irene to confidently
                    navigate menus and communicate her culinary desires.
                  </NumberedListItem>
                  <NumberedListItem>
                    <b>Engaging Information and Curiosities:</b> Enriching Irene{"'"}s
                    culinary exploration, our app provides captivating tidbits of
                    information and intriguing curiosities about traditional dishes,
                    adding depth and cultural context to her gastronomic journey.
                  </NumberedListItem>
                  <NumberedListItem>
                    <b>Menu Translations:</b> Breaking down language barriers, our app
                    offers seamless translations of menus, ensuring Irene can
                    effortlessly decipher the culinary offerings and make informed
                    choices.
                  </NumberedListItem>
                  <NumberedListItem>
                    <b>Ingredients and Allergen Information:</b> To cater to Irene
                    {"'"}s specific dietary needs and preferences, our app provides
                    comprehensive information on ingredients and allergens, allowing
                    her to make well-informed decisions and avoid any unwanted
                    surprises.
                  </NumberedListItem>
                </NumberedList>
                <Paragraph>
                  With these meticulously crafted features, our app aims to empower
                  Irene to fully immerse herself in the destination{"'"}s gastronomic
                  wonders, ensuring an extraordinary culinary adventure that leaves no
                  flavor unexplored.
                </Paragraph>
              </div>
            </div>
          </div>
          {/* Crafting a Site Map through Card Sorting section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
              <Title>Crafting a Site Map through Card Sorting</Title>
              <Paragraph>
                I engaged in a card sorting exercise with the invaluable input of 10
                individuals. Their insights played a pivotal role in shaping the
                site map for our app, aligning it with the features of our Minimum
                Viable Product (MVP).
              </Paragraph>
              <Image
                src="/assets/goeatblog6.png"
                alt="Site Map"
                width={0}
                height={0}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
                sizes="100vw"
                className="rounded-lg border border-border"
              />
              </div>
            </div>
          </div>
          {/* User Flow section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>User Flow</Title>
                <Paragraph>
                  Before diving into the prototype{"'"}s design, I meticulously
                  crafted a comprehensive user flow to chart the user{"'"}s journey
                  through Goeat.
                </Paragraph>
                <Image
                  src="/assets/goeatblog17.webp"
                  alt="User flow"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
          {/* Prototype and Iterate: Enhancing User Experience section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Prototype and Iterate: Enhancing User Experience</Title>
                <h3 className="text-xl font-semibold">Low Fidelity</h3>
                <Paragraph>
                  With the information architecture and user flow in mind, I embarked
                  on creating the initial Low Fidelity version of the app, utilizing
                  pen and paper to sketch out the design. This early-stage prototype  
                  allowed me to explore the visual and interactive elements of the app
                  while keeping the focus on functionality.
                </Paragraph>
                <Image
                  src="/assets/goeatblog7.png"
                  alt="Low fidelity"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                  I conducted a thorough usability test with 5 individuals, observing
                  their interactions and gathering valuable feedback. Through this
                  process, several pain points were identified, which will serve as a
                  guide for further improvements:
                </Paragraph>
                <BulletedList>
                  <BulletedListItem>
                    A significant percentage (80%) of users found it odd to have to
                    search for dishes from a specific city when the app already
                    provided geo-localization information.
                  </BulletedListItem>
                  <BulletedListItem>
                    A majority (60%) of users expressed the desire to view restaurant
                    dishes directly on the map view.
                  </BulletedListItem>
                  <BulletedListItem>
                    Users (60%) found it challenging to choose a restaurant and access
                    direction instructions. The {'"'}go to place{'"'} button lacked
                    clarity, leading to confusion. Addressing this pain point will
                    involve refining the navigation and providing clear instructions
                    for a seamless experience.
                  </BulletedListItem>
                </BulletedList>
              </div>
            </div>
          </div>
          {/* Mid Fidelity section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Mid Fidelity</Title>
                <Paragraph>
                  Building upon the insights gained from the Low Fidelity version, I
                  embarked on iterating and refining the design using Sketch,
                  resulting in the Mid Fidelity version of the app. This phase allowed
                  me to add more visual details and further develop the user
                </Paragraph>
                <Image
                  src="/assets/goeatblog8.png"
                  alt="Mid fidelity"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                  To ensure the continued improvement of the app, I conducted a second
                  round of user testing with 5 additional participants, utilizing
                  the same usability testing protocol as before.
                </Paragraph>
                <Paragraph>
                  Through this testing phase, valuable feedback emerged, guiding further refinements:
                </Paragraph>
                <BulletedList>
                  <BulletedListItem>
                    Users noted the absence of a screen where they could explicitly accept the geo-localization feature.
                  </BulletedListItem>
                  <BulletedListItem>
                    Some users found certain typography elements to be too small, impacting legibility.
                  </BulletedListItem>
                  <BulletedListItem>
                    Users expressed the desire for allergen information to be included in the restaurant dish view.
                  </BulletedListItem>
                  <BulletedListItem>
                    All participants (100%) expressed a strong desire for a shortcut to their points card from the tab bar.
                  </BulletedListItem>
                </BulletedList>
              </div>
            </div>
          </div>
          {/* High Fidelity section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>High Fidelity</Title>
                <Paragraph>
                  The High Fidelity version showcases a refined and polished design, incorporating the improvements identified through user feedback. By addressing pain points, enhancing visibility, and introducing missing features, we have taken significant strides towards creating a seamless and delightful gastronomic companion.
                </Paragraph>
                <Image
                  src="/assets/goeatblog9.png"
                  alt="High fidelity"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
          {/* Moodboard Exploration section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Moodboard Exploration</Title>
                <Paragraph>
                  I embarked on a creative journey that began with the creation of a
                  moodboard. Carefully curating a collection of images that
                  encapsulated the desired brand attributes—authentic, inspiring, and
                  adventurous—I embarked on a visual exploration to capture the
                  essence of the app.
                </Paragraph>
                <Image
                  src="/assets/goeatblog10.png"
                  alt="Moodboard exploration"
                  width={0}
                  height={0}
                  style={{ backgroundColor: "white", objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                  To ensure the alignment of the moodboard with the intended brand attributes, I conducted a Desirability Test with 5 users.Their valuable feedback confirmed that the moodboard successfully conveyed the desired brand personality and resonated with the target audience. This confirmation serves as a solid foundation for the subsequent development of the app&apos;s branding elements.
                </Paragraph>
                <Image
                  src="/assets/goeatblog11.png"
                  alt="Moodboard exploration"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                With the moodboard serving as a guide, we now move forward with the development of a comprehensive brand strategy that will captivate and inspire users, ensuring an unforgettable journey into the world of gastronomic delights.
                </Paragraph>
              </div>
            </div>
          </div>
          {/* Style Guide section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Style Guide</Title>
                <Paragraph>
                 To maintain consistency and alignment with the brand&apos;s vision, this document serves as a comprehensive guide, offering essential guidelines and visual references for the design process.
                </Paragraph>
                <Paragraph>
                 <strong>Typography:</strong> We have selected <strong><i>Lato</i></strong> as the primary typeface. Created by <strong>Lukasz Dziedzic</strong>, Lato is a warm and friendly Sans Serif font. Its semi-rounded details strike the perfect balance between formality and approachability, enhancing the overall brand persona.
                </Paragraph>
                <Image
                  src="/assets/goeatblog12.png"
                  alt="Style Guide"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                  <strong>Color Palette:</strong> The color palette is designed to be warm and inviting, with a focus on natural and earthy tones. The primary colors are <strong><i>Orange</i></strong> and <strong><i>Green</i></strong>.
                </Paragraph>
                <Image
                  src="/assets/goeatblog13.png"
                  alt="Color Palette"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                  <strong>Icons:</strong> The icons are designed to be simple and modern, with a focus on natural and earthy tones. The primary colors are <strong><i>Orange</i></strong> and <strong><i>Green</i></strong>.
                </Paragraph>
                <Image
                  src="/assets/goeatblog14.png"
                  alt="Icons"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
                <Paragraph>
                  <strong>Layout and Composition:</strong> Consistency in layout and composition is key to establishing a visually cohesive experience. The interface maintains a clean grid system with balanced spacing and alignment, ensuring optimal readability and visual hierarchy across all screens.
                </Paragraph>
                <Image
                  src="/assets/goeatblog15.png"
                  alt="Layout and Composition"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
          {/* Prototype section */}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Bringing the Prototype to Life</Title>
                <Paragraph>
                Using Flinto, the prototype has been transformed into an engaging and immersive experience, showcasing the seamless flow of user interactions.
                </Paragraph>
                <Paragraph>
                In the accompanying video, we witness the user journey come to life. The user begins by signing in, seamlessly navigating through the authentication process. With the geo-localization feature, they effortlessly discover traditional dishes from Bangkok, immersing themselves in the rich culinary heritage of the city.
                </Paragraph>
                <Image
                  src="/assets/goeatflinto1.gif"
                  alt="Goeat app prototype demonstration"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border mx-auto max-w-xs"
                />
                <Paragraph>
                In this second video, we witness the user's seamless transition from discovering the restaurant to immersing themselves in the dining experience. As the user arrives at the restaurant, they receive a notification prompting them to access the restaurant's menu.
                </Paragraph>
                <Paragraph>
                With a simple tap, the user effortlessly accesses the menu, revealing a visually enticing display of culinary delights. They navigate through the menu, exploring different sections and dishes with ease. When the user selects a dessert, they are presented with additional information, such as ingredients and a captivating description.
                </Paragraph>
                <Image
                  src="/assets/goeatflinto2.gif"
                  alt="Goeat app prototype demonstration"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border mx-auto max-w-xs"
                />
                <Paragraph>
                In this third video, we witness the user's return to the app, this time to take advantage of the discount points feature and further engage with their dining experiences.
                </Paragraph>
                <Image
                  src="/assets/goeatflinto3.gif"
                  alt="Goeat app prototype demonstration"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border mx-auto max-w-xs"
                />
              </div>
            </div>
          </div>
          {/*Landing Page section*/}
          <div className="px-12 py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Landing Page</Title>
                <Paragraph>
                This carefully crafted page serves as the gateway for users to discover and download the app, while also showcasing its features and the glowing comments from satisfied users.
                </Paragraph>
                <Image
                  src="/assets/goeatblog16.png"
                  alt="Landing Page"
                  width={0}
                  height={0}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  sizes="100vw"
                  className="rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
          {/*Next Steps section*/}
          <div className="px-12 pt-4 pb-24">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <Title>Next Steps</Title>
                <Paragraph>
                As Goeat continues to evolve, several exciting features are on the horizon, waiting to be explored and tested:
                </Paragraph>
                <BulletedList>
                  <BulletedListItem>
                    <b>Monetization Strategy:</b> Exploring premium features, partnerships with local restaurants, and targeted advertising opportunities to create sustainable revenue streams while maintaining the app's core value for users.
                  </BulletedListItem>
                  <BulletedListItem>
                    <b>Friend Following:</b> Enabling users to connect and follow friends on Goeat opens up new social dimensions to the app. Testing this feature will empower users to discover and share culinary experiences with their social circle.
                  </BulletedListItem>
                  <BulletedListItem>
                    <b>Gastronomy Tours with Locals:</b> Introducing gastronomy tours led by locals immerses users in authentic culinary experiences while traveling.
                  </BulletedListItem>
                  <BulletedListItem>
                  <b>Food Festivals Information:</b> Providing users with comprehensive information about food festivals, events, and culinary experiences happening in their area.
                  </BulletedListItem>
                  <BulletedListItem>
                    <b>In-App Payments:</b> Introducing secure and seamless in-app payments enhances the user experience, streamlining the process of ordering and paying for meals at partner restaurants.
                  </BulletedListItem>
                </BulletedList>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NextBack 
        prev={{
          href: "/lexicon",
          text: "Lexicon"
        }}
        next={{
          href: "/whatsapp",
          text: "WhatsApp polls"
        }}
      />
      {/* Footer */}
      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}

