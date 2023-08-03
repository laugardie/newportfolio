import MetaProps from "@/components/MetaProp";
import Paragraph from "@/components/design system/Paragraph";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import H1 from "@/components/design system/H1";
import Quote from "@/components/design system/Quote";
import Title from "@/components/design system/Title";
import Image from "next/image";
import SectionSm from "@/components/design system/SectionSm";
import SectionMd from "@/components/design system/SectionMd";

export default function Calquo() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/calquo.png"
          fill
          alt="A screenshot of the calquo app dashboard"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <aside className="absolute left-full pl-24">
            <dl className="mt-[152px]">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Industry" description="B2B, Sass" />
              <MetaProps tag="Date" description="March 21st, 2021" />
              <MetaProps tag="Duration" description="2 days" />
            </dl>
          </aside>
          <Title>Calquo</Title>
          <Paragraph>
            Calquo is a no-code calculator form that empowers businesses to
            generate leads, boost sales, and enhance engagement, all while
            minimizing the hassle. This innovative solution emerged from a 2-day
            design challenge. Following the design phase,{" "}
            <a
              className="underline hover:text-accent"
              href="https://twitter.com/dgrcode"
            >
              Daniel G. Reina
            </a>{" "}
            and{" "}
            <a
              className="underline hover:text-accent"
              href="https://twitter.com/_carletex_"
            >
              Carlos Sánchez
            </a>{" "}
            transformed the concept into a fully functional code.
          </Paragraph>
          <Quote>
            The objective of this challenge was to create an MVP (Minimum Viable
            Product) that could be implemented and coded in the future.
          </Quote>
          <Paragraph>
            My journey into design started from a completely different path—I
            spent four years as a Primary School Teacher. However, fueled by
            curiosity I ventured into the digital world to explore the realm of
            user-centered design. In 2019, I took a significant step in my
            professional growth by enrolling in Ironhack{"'"}s UX/UI Bootcamp,
            propelling my career forward and fostering an environment of
            continuous learning.
          </Paragraph>
          <H1>Design challenge results</H1>
          <Paragraph className="mb-6">
            The conclusion of the challenge resulted in the following
            deliverables:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>Log in screen.</BulletedListItem>
            <BulletedListItem>
              Dashboard with created calculators.
            </BulletedListItem>
            <BulletedListItem>
              Templates to start creating a calculator.
            </BulletedListItem>
            <BulletedListItem>
              Calculator with different types of inputs: image, numbers,
              formula, text, sliders, date, email and choice.
            </BulletedListItem>
            <BulletedListItem>Visualization of the form.</BulletedListItem>
          </BulletedList>
        </SectionSm>
        <SectionMd>
          <div className="relative w-full h-[280px] mt-12 mb-6">
            <Image
              src={"/assets/calquoblog1.png"}
              alt={"Calquo logo and slogan"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[600px] mb-6">
            <Image
              src={"/assets/calquoblog2.png"}
              alt={"Calquo log in and sign in screen"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[635px] mb-6">
            <Image
              src={"/assets/calquoblog3.png"}
              alt={"Calquo dashboard"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[318px] mb-6">
            <Image
              src={"/assets/calquoblog4.png"}
              alt={"Calquo color palette"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[600px] mb-6">
            <Image
              src={"/assets/calquoblog5.png"}
              alt={"Calquo themes"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[635px] mb-6">
            <Image
              src={"/assets/calquoblog6.png"}
              alt={"Calquo workbench"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[635px] mb-6">
            <Image
              src={"/assets/calquoblog7.png"}
              alt={"Calquo sidebars"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </SectionMd>
      </article>
    </div>
  );
}
