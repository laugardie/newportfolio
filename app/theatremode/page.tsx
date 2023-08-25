import MetaProps from "@/components/MetaProp";
import SectionSm from "@/components/design system/SectionSm";
import Image from "next/image";
import Title from "@/components/design system/Title";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import H1 from "@/components/design system/H1";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import NumberedList from "@/components/design system/NumberedList";
import NumberedListItem from "@/components/design system/NumberedListItem";
import Caption from "@/components/design system/Caption";
import H2 from "@/components/design system/H2";
import SectionXl from "@/components/design system/SectionXl";
import SectionMd from "@/components/design system/SectionMd";
import SectionLg from "@/components/design system/SectionLg";
import NextBack from "@/components/NextBack";

export default function Theatremode() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/theatremode.png"
          fill
          alt="Theatre mode feature"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <aside className="absolute left-full pl-24">
            <dl className="mt-[152px]">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Feature Design" />
              <MetaProps tag="Date" description="August 17th, 2021" />
              <MetaProps tag="Duration" description="2 weeks" />
            </dl>
          </aside>
          <Title>Theatre mode</Title>
          <Quote>
            Seamlessly access information and focus on what really matters.
          </Quote>
          <Paragraph>
            During my time at{" "}
            <a
              href="https://www.beezy.net/"
              target="_blank"
              className="underline hover:text-accent"
            >
              {" "}
              Beezy
            </a>
            , I took charge of designing a feature known as <i>Theatre Mode</i>.
            Beezy is a modern intranet that{"'"}s part of the Appspace workplace
            experience platform.
          </Paragraph>
          <Paragraph>
            This feature centers around a modal interface, providing a seamless
            way to view attached documents, photos, videos, PDFs, and more, all
            while enabling real-time commenting and reacting. What sets this
            feature apart is its adaptability - users can dive into content
            within the modal or immerse themselves in a distraction-free
            full-screen mode. Theatre Mode amplifies the user experience,
            enabling seamless content exploration and dynamic interaction.
          </Paragraph>
          <H1>The problem</H1>
          <Paragraph className="mb-6">
            The Theatre Mode feature addresses two key pain points:
          </Paragraph>
          <NumberedList>
            <NumberedListItem>
              <b>Navigating content challenges</b>: With Theatre Mode, there
              {"'"}s no need to download documents to access them. This
              eliminates the hassle of downloading, saving, and managing files,
              providing users with immediate access to the information they
              need.
            </NumberedListItem>
            <NumberedListItem>
              <b>Loss of time</b>: Theatre Mode creates a unified space where
              users can seamlessly interact with the attached information.
              Instead of navigating away to view or comment on documents, users
              can engage directly within the same interface, streamlining their
              workflow and enhancing their productivity.
            </NumberedListItem>
          </NumberedList>
          <H1>The solution</H1>
          <Paragraph>
            Theatre Mode optimizes the user experience. It minimizes
            disruptions, empowers users to engage directly with the content they
            need, and ultimately fosters a more efficient and productive work
            environment within Beezy{"'"}s digital workplace platform.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <Image
            src="/assets/theatremodeblog1.png"
            width={0}
            height={0}
            alt="Theatre mode modal with comments"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionMd>
        <SectionSm>
          <H1>Distraction-free mode</H1>
          <Paragraph>
            The theatre mode creates a dedicated, distraction-free environment
            where users can solely concentrate on the content at hand. It
            empowers users with the option to display or hide comments, ensuring
            an undisturbed and immersive experience tailored to their needs.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <Image
            src="/assets/theatremodeblog2.png"
            width={0}
            height={0}
            alt="Theatre mode modal distraction-free mode"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionMd>
        <SectionSm>
          <H1>Content thumbnails</H1>
          <Paragraph className="mb-6">
            Thhumbnails provides users with an efficient way to distinguish
            between various types of attached content within the modal and to
            effortlessly choose the specific content they wish to view.
          </Paragraph>
          <Image
            src="/assets/theatremodeblog3.png"
            width={0}
            height={0}
            alt="Thumbnails"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
            className="mb-10"
          />
          <Paragraph>
            Users can flip through attached content effortlessly with a cool
            horizontal scrolling, and an intuitive hint guides them towards
            hidden elements, ensuring a comprehensive viewing experience. To
            access these elements, users can either scroll horizontally through
            the thumbnails or conveniently tab through them, effortlessly
            transitioning from one thumbnail to another.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <Image
            src="/assets/theatremodeblog5.png"
            width={0}
            height={0}
            alt="Horizontal scroll in thumbnails"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionMd>
        <SectionSm>
          <H1>Comments and likes</H1>
          <Paragraph>
            The right panel enables a dynamic side-by-side display of content
            and comments. Users can effortlessly engage with comments while
            simultaneously viewing the content, fostering real-time
            collaboration and offering insight into ongoing discussions.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <Image
            src="/assets/theatremodeblog4.png"
            width={0}
            height={0}
            alt="Comments drawer"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionMd>
        <SectionSm>
          <H1>Content display</H1>
          <Paragraph>
            Whether it{"'"}s images, documents, videos, or PDFs, the modal is an
            all-in-one hub. With a user-friendly interface, you can seamlessly
            toggle between different types of content, giving you the
            flexibility to engage with your attachments just the way you want.
            No more switching windows or hunting for files. It{"'"}s all right
            there, neatly organized for your convenience.
          </Paragraph>
          <Paragraph>
            Check out the image below to see how we{"'"}ve displayed various
            types of content.
          </Paragraph>
        </SectionSm>
        <SectionXl>
          <Image
            src="/assets/theatremodeblog6.png"
            width={0}
            height={0}
            alt="Content displayed"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionXl>
        <SectionSm>
          <H1>Hide/Show thumbnails</H1>
          <Paragraph>
            In a content-packed modal, you have the power to control your
            experience. Toggle the content thumbnails on or off for a smoother
            journey through your attachments. It{"'"}s all about tailoring the
            experience to what suits users best!
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <figure className="mb-10">
            <Image
              src="/assets/theatremodeblog7.png"
              width={0}
              height={0}
              alt="Hide thumbnails"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>Hide thumbnails</Caption>
          </figure>
          <figure className="mb-10">
            <Image
              src="/assets/theatremodeblog8.png"
              width={0}
              height={0}
              alt="Show thumbnails"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>Show thumbnails</Caption>
          </figure>
        </SectionMd>
        <SectionSm>
          <Paragraph>
            In conclusion, Theatre Mode isn{"'"}t just a feature; it{"'"}s a
            transformative tool that reshapes how we engage with content and
            collaborate within the digital workspace. By addressing the pain
            points of distraction, simplifying content interaction, and valuing
            every second saved, this innovation aligns with Beezy{"'"}s
            commitment to enhancing productivity and fostering seamless
            communication. As we step into an era of ever-evolving work
            dynamics, Theatre Mode stands as a testament to the power of
            user-centric design in making work not just efficient, but
            enjoyable.
          </Paragraph>
          <Paragraph className="text-lightGray">
            * Photos by{" "}
            <a
              className=" hover:text-accent underline"
              href="https://unsplash.com/en/@mkmasdos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              MK +2
            </a>{" "}
            at{" "}
            <a
              className=" hover:text-accent underline"
              href="https://unsplash.com/ en/photos/7R1eUOlI24M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </Paragraph>
        </SectionSm>
      </article>
      <NextBack href={"/avatars"} next={"Avatars"} />
    </div>
  );
}
