import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import Image from "next/image";

export default function Gumroad() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          src="/assets/gumroad.png"
          fill
          alt="gumroad"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <aside className="absolute left-full pl-24">
            <dl className="mt-[152px]">
              <MetaProps tag="Role" description="Product Designer" />
              <MetaProps tag="Project Type" description="Product Design" />
              <MetaProps tag="Date" description="July, 2021" />
              <MetaProps tag="Duration" description="1 year and 5 months" />
            </dl>
          </aside>
          <Title>Gumroad</Title>
        </SectionSm>
      </article>
      <NextBack href={"/daylightcalculator"} next={"Daylight Calculator"} />
    </div>
  );
}
