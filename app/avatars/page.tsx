import MetaProps from "@/components/MetaProp";
import Caption from "@/components/design system/Caption";
import H1 from "@/components/design system/H1";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import SectionMd from "@/components/design system/SectionMd";
import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function Avatars() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/avatars.png"
          fill
          alt="Three avatars"
          style={{ objectFit: "cover" }}
        />
      </div>
      <SectionSm className="relative pt-24">
        <aside className="absolute left-full pl-24">
          <dl className="mt-[152px]">
            <MetaProps tag="Role" description="Designer" />
            <MetaProps tag="Industry" description="Illustration System" />
            <MetaProps tag="Date" description="March 19th, 2021" />
            <MetaProps tag="Duration" description="1 day" />
          </dl>
        </aside>
        <Title>Avatars</Title>
        <Paragraph>
          Avatars is a playful doodle illustration system that I crafted in
          Figma, designed to spark creativity through its versatile range of
          variants. With this system, you have the power to mix and match
          various illustrations, allowing you to create a myriad of unique
          avatars. Unleash your imagination by combining different hairstyles,
          outfits, and facial expressions to bring your personalised avatar to
          life.
        </Paragraph>
        <Quote>
          The main goal of this project was to embark on an enjoyable
          exploration of Figma components while indulging in the art of
          doodling.
        </Quote>
        <H1>How I Created the Illustration System</H1>
        <Paragraph>
          To begin, I let my creativity flow as I sketched various faces adorned
          with distinct hairstyles, clothes, and facial expressions on separate
          sheets of paper. Utilizing a head template, I ensured that all the
          body parts shared a uniform size. Take a look at some examples in the
          images below for a glimpse into the process.
        </Paragraph>
        <figure className="mb-6">
          <Image
            src="/assets/avatarsblog1.png"
            width={0}
            height={0}
            alt="Sketches"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
          <Caption>Doodles exploration</Caption>
        </figure>
        <Paragraph>
          Once I felt satisfied with the diverse range of variations, I captured
          a photograph of all the doodles and then proceeded to vectorise them
          in Illustrator, meticulously crafting individual body parts.
        </Paragraph>
        <Paragraph>
          Here are the final vectorised expressions, hairstyles, and clothing
          options:
        </Paragraph>
        <figure className="mb-6">
          <Image
            src="/assets/avatarsblog2.png"
            width={0}
            height={0}
            alt="Vectors"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
          <Caption>
            Final Vectorised Expressions, Hairstyles, and Clothing
          </Caption>
        </figure>
        <Paragraph>
          As a final step, I transferred these elements into Figma, enabling the
          creation of different variants. Now, you have the freedom to combine
          and assemble various body parts as you please, crafting your very own
          unique avatar.
        </Paragraph>

        <Image
          src="/assets/avatarsblog3.gif"
          width={0}
          height={0}
          alt="Avatars Gif"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          sizes="100vw"
        />
      </SectionSm>
    </div>
  );
}
