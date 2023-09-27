import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";
import SectionSm from "@/components/design system/SectionSm";
import SectionXl from "@/components/design system/SectionXl";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function Gumroad() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          className="lg:hidden"
          src="/assets/buidlguidl-cover-mobile.png"
          fill
          alt="buidlguidl"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden lg:flex"
          src="/assets/buidlguidl.png"
          fill
          alt="buidlguidl"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <Title>Buidlguidl</Title>
          <aside className="hidden lg:flex lg:mb-8 xl:absolute xl:left-full xl:pl-20 2xl:pl-24">
            <dl className="flex flex-wrap gap-10 xl:gap-0">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Web Design" />
              <MetaProps tag="Date" description="March 29th, 2022" />
              <MetaProps tag="Duration" description="1 week" />
            </dl>
          </aside>
          <Paragraph>
            <a
              href="https://buidlguidl.com/"
              target="_blank"
              className="underline hover:text-accent"
            >
              BuildGuild
            </a>{" "}
            is a curated group of Ethereum builders creating products,
            prototypes, and tutorials to enrich the web3 ecosystem.
          </Paragraph>
          <Paragraph>
            I collaborated on the BuildGuild project, contributing my design
            expertise to various aspects of their website. This included
            designing the Metamask login interface, and crafting the visuals for
            the builders page, project list, challenges page, and the profile
            page.
          </Paragraph>
          <Paragraph>
            Here are some screenshots showcasing my contributions to the
            BuildGuild project:
          </Paragraph>
        </SectionSm>
        <SectionXl>
          <Image
            src="/assets/buidlguidlblog1.png"
            width={0}
            height={0}
            alt="Buidlguidl profile page"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionXl>
      </article>
      <NextBack href={"/nectar"} next={"Nectar"} />
    </div>
  );
}
