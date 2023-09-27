import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import Caption from "@/components/design system/Caption";
import Paragraph from "@/components/design system/Paragraph";
import SectionLg from "@/components/design system/SectionLg";
import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function Inbolt() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          className="lg:hidden"
          src="/assets/inbolt-cover-mobile.png"
          fill
          alt="Inbolt dashboard"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden lg:flex 2xl:hidden"
          src="/assets/inbolt-cover-lg.png"
          fill
          alt="Inbolt dashboard"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden 2xl:flex"
          src="/assets/inbolt.png"
          fill
          alt="Inbolt dashboard"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <Title>Inbolt</Title>
          <aside className="hidden lg:flex lg:mb-8 xl:absolute xl:left-full xl:pl-20 2xl:pl-24">
            <dl className="flex flex-wrap gap-10 xl:gap-0">
              <MetaProps tag="Role" description="Designer" />
              <MetaProps tag="Project Type" description="Dashboard UI" />
              <MetaProps tag="Date" description="September 14th, 2021" />
              <MetaProps tag="Duration" description="1 day" />
            </dl>
          </aside>
          <Paragraph>
            Inbolt is a personal UI project where I designed a dashboard
            specifically for freelancers{"'"} invoices.
          </Paragraph>
          <Paragraph>
            As a freelancer myself, the challenges of tracking and sending
            invoices became a personal hurdle. Being in the same boat as
            countless freelancers, I felt the frustration of managing invoices
            without a seamless tool. This struggle ignited the idea for Inbolt,
            a dashboard designed with a touch of personal experience. Through
            this project, I aimed not only to streamline invoicing but also to
            offer fellow freelancers the ease and confidence they deserve.
          </Paragraph>
          <Paragraph>
            My approach to this design centers around users, keeping things
            straightforward and clear to elevate both usability and visual
            appeal.
          </Paragraph>
        </SectionSm>
        <SectionLg>
          <figure>
            <Image
              src="/assets/inboltblog1.png"
              width={0}
              height={0}
              alt="Inbolt dashboard"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>Inbolt dashboard</Caption>
          </figure>
        </SectionLg>
      </article>
      <NextBack href={"/calquo"} next={"Calquo"} />
    </div>
  );
}
