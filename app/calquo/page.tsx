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
import NextBack from "@/components/NextBack";

export default function Calquo() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          className="md:hidden"
          src="/assets/calquo-cover-mobile.png"
          fill
          alt="A screenshot of the calquo app dashboard"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden md:flex xl:hidden"
          src="/assets/calquo-cover-lg.png"
          fill
          alt="A screenshot of the calquo app dashboard"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden xl:flex"
          src="/assets/calquo.png"
          fill
          alt="A screenshot of the calquo app dashboard"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <Title>Calquo</Title>
          <aside className="hidden lg:flex lg:mb-8 xl:absolute xl:left-full xl:pl-20 2xl:pl-24">
            <dl className="flex flex-wrap gap-10 xl:gap-0">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="B2B, SaaS" />
              <MetaProps tag="Date" description="March 21st, 2021" />
              <MetaProps tag="Duration" description="2 days" />
            </dl>
          </aside>
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
          <div className="relative flex justify-center w-full mt-12 mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog1-mobile.png"}
              alt={"Calquo logo and slogan"}
              width={390}
              height={954}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog1.png"}
              alt={"Calquo logo and slogan"}
              width={1166}
              height={280}
              style={{ objectFit: "scale-down" }}
            />
          </div>
          <div className="relative flex justify-center w-full mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog2-mobile.png"}
              alt={"Calquo log in and sign in screen"}
              width={390}
              height={1004}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog2.png"}
              alt={"Calquo log in and sign in screen"}
              width={1166}
              height={600}
              style={{ objectFit: "scale-down" }}
            />
          </div>
          <div className="relative flex justify-center w-full mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog3-mobile.png"}
              alt={"Calquo dashboard"}
              width={390}
              height={258}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog3.png"}
              alt={"Calquo dashboard"}
              width={1166}
              height={635}
              style={{ objectFit: "scale-down" }}
            />
          </div>
          <div className="relative flex justify-center w-full mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog4-mobile.png"}
              alt={"Calquo color palette"}
              width={390}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog4.png"}
              alt={"Calquo color palette"}
              width={1166}
              height={318}
              style={{ objectFit: "scale-down" }}
            />
          </div>
          <div className="relative flex justify-center w-full mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog5.png"}
              alt={"Calquo themes"}
              width={390}
              height={201}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog5.png"}
              alt={"Calquo themes"}
              width={1166}
              height={600}
              style={{ objectFit: "scale-down" }}
            />
          </div>
          <div className="relative flex justify-center w-full mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog6.png"}
              alt={"Calquo workbench"}
              width={390}
              height={263}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog6.png"}
              alt={"Calquo workbench"}
              width={1166}
              height={635}
              style={{ objectFit: "scale-down" }}
            />
          </div>
          <div className="relative flex justify-center w-full mb-6">
            <Image
              className="sm:hidden"
              src={"/assets/calquoblog7.png"}
              alt={"Calquo sidebars"}
              width={390}
              height={261}
              style={{ objectFit: "contain" }}
            />
            <Image
              className="hidden sm:flex"
              src={"/assets/calquoblog7.png"}
              alt={"Calquo sidebars"}
              width={1166}
              height={635}
              style={{ objectFit: "scale-down" }}
            />
          </div>
        </SectionMd>
      </article>
      <NextBack href={"/goeat"} next={"Goeat"} />
    </div>
  );
}
