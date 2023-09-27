import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import Caption from "@/components/design system/Caption";
import H1 from "@/components/design system/H1";
import H2 from "@/components/design system/H2";
import Paragraph from "@/components/design system/Paragraph";
import SectionMd from "@/components/design system/SectionMd";
import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function Gumroad() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          className="xl:hidden"
          src="/assets/gumroad-cover-mobile.png"
          fill
          alt="gumroad"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden lg:flex xl:hidden"
          src="/assets/gumroad-cover-lg.png"
          fill
          alt="gumroad"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden xl:flex"
          src="/assets/gumroad.png"
          fill
          alt="gumroad"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <Title>Gumroad</Title>
          <aside className="hidden lg:flex lg:mb-8 xl:absolute xl:left-full xl:pl-20 2xl:pl-24">
            <dl className="flex flex-wrap gap-10 xl:gap-0">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Product Design" />
              <MetaProps tag="Date" description="July, 2021" />
              <MetaProps tag="Duration" description="1 year and 5 months" />
            </dl>
          </aside>
          <Paragraph>
            I had a blast as a Product Designer at{" "}
            <a
              href="gumroad.com"
              target="_blank"
              className="underline hover:text-accent"
            >
              Gumroad
            </a>
            , an online hub for creators, where I worked for a year and a half.
            During my time there, I worked on many different features,
            contributed to the design system, and even tried my hand at some
            coding...
          </Paragraph>
          <Paragraph className="mb-6">
            Here are two features I proudly contributed to:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              <b>New checkout</b>
            </BulletedListItem>
          </BulletedList>
          <Paragraph>
            I was responsible for revamping the checkout design and implementing
            UX improvements. Additionally, I actively contributed to the coding
            aspect, including the integration of some checkout components into
            the team library.
          </Paragraph>
          <Paragraph>
            The new checkout now features its very own dedicated page. It{"'"}s
            your one-stop-shop for buying single items, loading up your cart
            with multiple products, and snagging those sweet discounts, whether
            it{"'"}s a single or multiple ones.
          </Paragraph>
        </SectionSm>
        <SectionMd className="mb-20">
          <figure>
            <Image
              src="/assets/gumroadblog1.png"
              width={0}
              height={0}
              alt="Gumroad's new checkout"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>New checkout page</Caption>
          </figure>
        </SectionMd>
        <SectionSm>
          <BulletedList>
            <BulletedListItem>
              <b>Team Support</b>
            </BulletedListItem>
          </BulletedList>
          <Paragraph>
            I took the lead in crafting this feature{"'"}s design. With Team
            support, we made it super easy for creators to switch back and forth
            between their personal and team accounts without any pesky logouts.
          </Paragraph>
        </SectionSm>
        <SectionMd className="mb-20">
          <figure>
            <Image
              src="/assets/gumroadblog2.png"
              width={0}
              height={0}
              alt="Gumroad's new teams support feature"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>Team support settings</Caption>
          </figure>
        </SectionMd>
      </article>
      <NextBack href={"/daylightcalculator"} next={"Daylight Calculator"} />
    </div>
  );
}
