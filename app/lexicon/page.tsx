import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import Caption from "@/components/design system/Caption";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function Lexicon() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/lexicon.svg"
          fill
          alt="Lexicon cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <Title>Lexicon</Title>
          <aside className="hidden lg:flex lg:mb-8 xl:absolute xl:left-full xl:pl-20 2xl:pl-24">
            <dl className="flex flex-wrap gap-10 xl:gap-0">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Desing System" />
              <MetaProps tag="Date" description="October, 2019" />
              <MetaProps tag="Duration" description="9 months" />
            </dl>
          </aside>
          <Paragraph>
            During my time at Liferay, I had the privilege to contribute to the{" "}
            <a
              className="underline hover:text-accent"
              href="https://liferay.design/lexicon/"
              target="_blank"
            >
              Lexicon Design System
            </a>
            . It not only offered me the opportunity to immerse myself in the
            world of design consistency, collaboration, and innovation but also
            served as the catalyst that ignited my passion for Design Systems.
          </Paragraph>
          <Quote>An Experience Language for Crafting Beautiful UI</Quote>
          <figure className="mb-6">
            <Image
              src="/assets/liferay.jpeg"
              width={0}
              height={0}
              alt="Working at Liferay"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>
              The Design System Team and the Research Team working on a
              Heuristic project at Liferay.
            </Caption>
          </figure>
          <Paragraph>
            The Lexicon Design System provides a common framework for building
            interfaces within the Liferay product ecosystem to provide a unified
            experience to its users. In this project, I dived deep into crafting
            user-centric components, fostering accessibility, and nurturing a
            harmonious design language that resonates with users on a profound
            level.
          </Paragraph>
          <Paragraph className="mb-6">
            As you explore the following sections, you can witness the evolution
            of some of my contributions to the Lexicon Design System.
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              <a
                className="underline hover:text-accent"
                href="https://liferay.design/lexicon/core-components/buttons/action-buttons/"
              >
                Action Buttons
              </a>
            </BulletedListItem>
            <BulletedListItem>
              <a
                className="underline hover:text-accent"
                href="https://liferay.design/lexicon/core-components/dual-listbox/"
              >
                Dual Listbox
              </a>
            </BulletedListItem>
            <BulletedListItem>
              <a
                className="underline hover:text-accent"
                href="https://liferay.design/lexicon/core-components/keys/"
              >
                Keys
              </a>
            </BulletedListItem>
            <BulletedListItem>
              <a
                className="underline hover:text-accent"
                href="https://liferay.design/lexicon/core-components/labels/"
              >
                Labels
              </a>
            </BulletedListItem>
            <BulletedListItem>
              <a
                className="underline hover:text-accent"
                href="https://liferay.design/lexicon/core-components/modals/"
              >
                Modals
              </a>
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
      </article>
      <NextBack href={"/inbolt"} next={"Inbolt"} />
    </div>
  );
}
