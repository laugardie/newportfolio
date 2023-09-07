import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import Caption from "@/components/design system/Caption";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import SectionSm from "@/components/design system/SectionSm";
import SectionXl from "@/components/design system/SectionXl";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function daylightcalculator() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/daylightcalculator.jpg"
          fill
          alt="daylight calculator"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <aside className="absolute left-full pl-24">
            <dl className="mt-[152px]">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Product Design" />
              <MetaProps tag="Date" description="May 7th, 2023" />
              <MetaProps tag="Duration" description="1 week" />
            </dl>
          </aside>
          <Title>Daylight calculator</Title>
          <Paragraph>
            The Daylight Calculator project, developed by{" "}
            <a
              href="https://whitearkitekter.com/"
              className="underline hover:text-accent"
            >
              White Arkitekter
            </a>
            , sheds light on daylighting assessments according to Swedish
            standards. It offers a user-friendly way to evaluate room
            illumination using just four essential parameters: window
            dimensions, room height, room depth, and daylight access.
          </Paragraph>
          <Paragraph>
            This tool plays a pivotal role in assessing compliance with Swedish
            daylight requirements, especially in the context of high-density
            urban developments. It seamlessly integrates into the workflows of
            architects and urban planners, enabling them to evaluate and compare
            various urban layouts in terms of daylight access. Even
            non-specialists, including architects and engineers, can employ this
            method during the early design stages, making it an invaluable
            resource for placing a spatial program within a building envelope
            without the need for intricate interior configurations.
          </Paragraph>
          <Quote>Daylight Calculator: A daylight predictor tool</Quote>
          <Paragraph>
            In this project, my role involved enhancing the visual design and
            addressing several UX issues like:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>Designing a project dashboard.</BulletedListItem>
            <BulletedListItem>
              Enhancing the overall experience of creating a new project.
            </BulletedListItem>
            <BulletedListItem>
              Implementing a visual indicator for model uploads.
            </BulletedListItem>
            <BulletedListItem>
              Improving the presentation of model layers.
            </BulletedListItem>
            <BulletedListItem>
              Enabling users to easily toggle the visibility of layers.
            </BulletedListItem>
            <BulletedListItem>
              Implementing a way to help users identify invalid objects within
              layers.
            </BulletedListItem>
            <BulletedListItem>
              Allowing users to modify layer properties.
            </BulletedListItem>
            <BulletedListItem>
              Enhancing the visual design of results to help users understand
              the assesment in a friendly way.
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
        <SectionXl className="mt-16 mb-8">
          <figure>
            <Image
              src="/assets/whiteblog1.png"
              width={0}
              height={0}
              alt="Buidlguidl profile page"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>A Glimpse into the Daylight Calculator</Caption>
          </figure>
        </SectionXl>
      </article>
      <NextBack href={"/buidlguidl"} next={"Buidlguidl"} />
    </div>
  );
}
