import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import H1 from "@/components/design system/H1";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import SectionMd from "@/components/design system/SectionMd";
import SectionSm from "@/components/design system/SectionSm";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";

export default function About() {
  return (
    <>
      <SectionSm className="pt-24">
        <h1 className="font-extrabold text-5xl lg:text-6xl mt-20 lg:mt-40 pb-8 leading-[58px] lg:leading-[68px">
          Passionate about pixels and experiences
        </h1>
        <Paragraph>
          Hola! I{"'"} m Laura, a design enthusiast on a mission to tackle real
          problems and create captivating, functional, and user-friendly
          experiences.
        </Paragraph>
        <Paragraph>
          Currently, I{"'"}m rocking the remote life as a freelance Product
          Designer. Previously, I had the privilege of being part of the
          talented team at{" "}
          <a className="underline hover:text-accent" href="https://gumroad.com">
            Gumroad
          </a>
          , an online marketplace for creators. I also had the opportunity to
          work at{" "}
          <a
            className="underline hover:text-accent"
            href="https://www.beezy.net/"
          >
            Beezy
          </a>
          , where I engaged in a variety of exciting tasks. From laying the
          groundwork for a Design System to crafting innovative features. Prior
          to this, I had an absolute blast contributing to the Design System
          Team at Liferay, leaving my mark on the incredible{" "}
          <a
            className="underline hover:text-accent"
            href="https://liferay.design/lexicon/"
          >
            Lexicon
          </a>{" "}
          project.
        </Paragraph>
        <Quote>
          A product designer with over 4 years of experience working across
          design systems, user experience, and accessibility.
        </Quote>
        <Image
          className="my-4 pb-8"
          src={"/assets/laura-flores.jpeg"}
          alt={"a profile picture of Laura"}
          width={739}
          height={492}
        />
        <Paragraph>
          {" "}
          My journey into design started from a completely different path—I
          spent four years as a Primary School Teacher. However, fueled by
          curiosity I ventured into the digital world to explore the realm of
          user-centered design. In 2019, I took a significant step in my
          professional growth by enrolling in Ironhack{"'"}s UX/UI Bootcamp,
          propelling my career forward and fostering an environment of
          continuous learning.
        </Paragraph>
        <Paragraph>
          While design is my primary focus, I also enjoy challenging myself in
          other areas, including expanding my knowledge in front-end
          development.
        </Paragraph>
        <Paragraph>
          Beyond the tech world, I{"'"}m passionate about CrossFit, yoga, cats,
          and whipping up culinary wonders in the kitchen. Food is not just
          sustenance for me; it{"'"}s my second language.
        </Paragraph>
        <Paragraph>
          Feel free to connect with me on{" "}
          <a
            className="underline hover:text-accent"
            href="https://www.linkedin.com/in/laugardie/"
          >
            LinkedIn
          </a>{" "}
          or drop me a line via{" "}
          <Link
            className="underline hover:text-accent"
            href="mailto:laugardie89@gmail.com"
            target="_blank"
          >
            email
          </Link>
          . Whether it{"'"}s about exciting opportunities or even just a
          friendly hello!! 😊
        </Paragraph>
        <H1>Fun facts about me</H1>
        <BulletedList>
          <BulletedListItem>
            Not only am I a designer, but I{"'"}m also a certified yoga teacher,
            spreading mindfulness and flexibility both on and off the mat.
          </BulletedListItem>
          <BulletedListItem>
            I{"'"}ve had the incredible opportunity to call several vibrant
            cities home, including New York, Dublin, Madrid, and my beloved
            Sevilla, each leaving an indelible mark on my journey.
          </BulletedListItem>
          <BulletedListItem>
            I{"'"}m completely obsessed with perfecting the art of homemade
            pizza.
          </BulletedListItem>
          <BulletedListItem>
            I{"'"}m a true DIY enthusiast, always eager to embark on creative
            projects and bring my imagination to life.
          </BulletedListItem>
          <BulletedListItem>
            Board game aficionado alert! After playing a new board game, I can
            {"'"}t resist the temptation to add it to my ever-growing
            collection.
          </BulletedListItem>
          <BulletedListItem>
            Music is my ultimate jam, and I can{"'"}t get enough of talented
            producers like Flume, Pluko, Vance Joy, Benny Blanco, PLÜM, and San
            Holo. Their mind-blowing melodies never fail to captivate my ears
            and ignite my creative fire.
          </BulletedListItem>
        </BulletedList>
      </SectionSm>
      <SectionMd className="grid grid-rows-2 gap-2 max-w-xl lg:max-w-4xl mx-auto pt-8">
        <div className="grid grid-cols-3 gap-2 w-124">
          <div className="h-48 lg:h-96 relative">
            <Image
              src={"/assets/feet.png"}
              alt={"Handstand feet"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-48 lg:h-96 relative">
            <Image
              src={"/assets/diy.png"}
              alt={"crafts"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-48 lg:h-96 relative">
            <Image
              src={"/assets/landscape.png"}
              alt={"clouds landscape"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 w-124">
          <div className="h-48 lg:h-96 col-span-1 relative">
            <Image
              src={"/assets/trees.png"}
              alt={"palm trees"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-48 lg:h-96 col-span-2 relative">
            <Image
              src={"/assets/pizza.png"}
              alt={"pizza sign"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-48 lg:h-96 col-span-3 relative">
            <Image
              src={"/assets/jenga.png"}
              alt={"jenga"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <Footer />
      </SectionMd>
    </>
  );
}
