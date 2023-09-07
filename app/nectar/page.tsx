import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import Image from "next/image";
import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";
import SectionMd from "@/components/design system/SectionMd";
import Caption from "@/components/design system/Caption";

export default function Theatremode() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/nectar.png"
          fill
          alt="nectar"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <aside className="absolute left-full pl-24">
            <dl className="mt-[152px]">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Design System" />
              <MetaProps tag="Date" description="January 21st, 2022" />
              <MetaProps tag="Duration" description="3 months" />
            </dl>
          </aside>
          <Title>Nectar</Title>
          <Paragraph>
            During my time at{" "}
            <a
              href="https://www.beezy.net/"
              target="_blank"
              className="underline hover:text-accent"
            >
              Beezy
            </a>
            , I embraced an exciting challenge – building a brand-new design
            system from scratch. This meant not just creating the essential
            foundations, such as developing tools, refining processes,
            establishing naming conventions, defining organizational structures,
            crafting a unique brand identity, and creating a memorable logo, but
            it also involved the seamless integration of fresh components into
            our team{"'"}s Figma library.
          </Paragraph>
          <Paragraph>
            I made sure to keep these resources current, so our design system,
            which I proudly named {'"'}Nectar{'"'}, always stayed up-to-date and
            incredibly useful for the team. This allowed us to enhance our
            design workflow but also fostered a sense of unity and consistency
            across all our projects.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <figure>
            <Image
              src="/assets/nectarblog1.png"
              width={0}
              height={0}
              alt="Nectar Design System"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>A Glimpse into the Nectar Design System</Caption>
          </figure>
        </SectionMd>
      </article>
      <NextBack href={"/theatremode"} next={"Theatre mode"} />
    </div>
  );
}
