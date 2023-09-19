import H1 from "@/components/design system/H1";
import H2 from "@/components/design system/H2";
import Paragraph from "@/components/design system/Paragraph";
import SectionSm from "@/components/design system/SectionSm";
import Job from "@/components/Job";
import Link from "next/link";
import Footer from "../Footer";

export default function Resume() {
  return (
    <>
      <SectionSm className="pt-6 lg:pt-24">
        <h1 className="font-extrabold text-5xl lg:text-6xl mt-40 pb-8 leading-[58px] lg:leading-[68px]">
          My work journey, knowledge and skills come together.
        </h1>
        <Paragraph>
          A product designer with over 5 years of experience working across
          design systems, user experience, and accessibility.
        </Paragraph>
        <div className="flex items-center h-14">
          <Link
            className="flex items-center h-full px-6 bg-black text-white border-2 border-black hover:bg-accent hover:border-accent font-source font-semibold text-lg lg:text-xl"
            href="/cv - laura garcia.pdf"
            target="_blank"
          >
            Download CV ↓
          </Link>
          <Link
            className="flex items-center h-full px-6 ml-6 bg-white text-black border-2 border-black hover:bg-black hover:text-white font-source font-semibold text-lg lg:text-xl"
            href="https://www.linkedin.com/in/laugardie/?locale=en_US"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <H1>Experience</H1>
        <div className="grid gap-12 mt-12">
          <Job
            src={"/assets/gumroadlogo.png"}
            alt={"gumroad logo"}
            description={
              "Crafting user-centric features and optimizing the overall user experience."
            }
            role={"Product Designer"}
            company={"Gumroad |"}
            type={"Freelance"}
            place={"Remote |"}
            from={"Jul"}
            year1={2021}
            to={"Dic"}
            year2={2022}
          />
          <Job
            src={"/assets/beezylogo.png"}
            alt={"Beezy logo"}
            description={
              "My role included establishing a new Design System, designing new features, optimising design workflows, managing Sketch to Figma migrations, creating animations, crafting branding proposals, and emphasising accessibility in design."
            }
            role={"Product Designer"}
            company={"Beezy |"}
            type={""}
            place={"Remote"}
            from={"Jun"}
            year1={2020}
            to={"Aug"}
            year2={2021}
          ></Job>
          <Job
            src={"/assets/liferaylogo.png"}
            alt={"Liferay logo"}
            description={
              "My responsibilities revolved around enhancing the Lexicon Design System. This encompassed component design, icon creation, formulating design guidelines for patterns and components, and ensuring the Design System site remained consistently updated with documentation."
            }
            role={"Product Designer"}
            company={"Liferay | "}
            place={"Madrid"}
            from={"Oct"}
            year1={2019}
            to={"Jun"}
            year2={2020}
          ></Job>
          <Job
            src={"/assets/teacherlogo.png"}
            alt={"Foreign Language Teacher logo"}
            description={
              "In the past, I served as a bilingual teacher, instructing a wide range of age groups in subjects such as English, Mathematics, Social Science, and Natural Science."
            }
            role={"Foreign Language Teacher"}
            company={"Schools and Academies | "}
            place={"Sevilla | Dublin"}
            from={"Feb"}
            year1={2009}
            to={"Mar"}
            year2={2018}
          ></Job>
        </div>
        <H1>Education</H1>
        <div className="grid gap-12 mt-12">
          <Job
            src={"/assets/ironhacklogo.png"}
            alt={"Ironhack logo"}
            role={"UX / UI Design Bootcamp"}
            company={"Ironhack | "}
            place={"Madrid"}
            from={"Jul"}
            year1={2019}
            to={"Sept"}
            year2={2019}
          ></Job>
          <Job
            src={"/assets/universidadsevillalogo.png"}
            alt={"Seville's University"}
            role={"Foreign Language Primary School Teacher"}
            company={"Universidad de Sevilla | "}
            place={"Sevilla"}
            from={"Sept"}
            year1={2007}
            to={"Jun"}
            year2={2010}
          ></Job>
        </div>
        <H1>Languages</H1>
        <div className="flex gap-8">
          <div>
            <div className="font-source font-bold text-xl lg:text-2xl">
              Spanish
            </div>
            <div className="font-source text-lg lg:text-xl text-lightGray">
              Native
            </div>
          </div>
          <div>
            <div className="font-source font-bold text-xl lg:text-2xl">
              English
            </div>
            <div className="font-source text-lg lg:text-xl text-lightGray">
              C1
            </div>
          </div>
        </div>
        <H1>Skills</H1>
        <div className="grid grid-rows lg:grid-cols-2 lg:gap-8">
          <div>
            <H2>Design</H2>
            <Paragraph className="mb-0">
              Wireframing, Prototyping, Responsive Design, Design Systems,
              Component documentation, Visual Design, Interaction Design,
              Accessibility
            </Paragraph>
          </div>
          <div>
            <H2>Toolkit</H2>
            <Paragraph className="mb-0">
              Figma, Illustrator, Photoshop, HTML & CSS, JavaScript, Tailwind,
              Next.js, Flinto, Principle, Github, Jira
            </Paragraph>
          </div>
        </div>
        <Footer />
      </SectionSm>
    </>
  );
}
