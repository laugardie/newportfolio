import Quote from "@/components/Quote";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="container mx-auto box-border max-w-3xl flex flex-col gap-8">
        <h1 className="font-extrabold text-6xl mt-40">
          Passionate about pixels and experiences
        </h1>
        <p className="font-source text-xl leading-7">
          Hola! I{"'"} m Laura, a design enthusiast on a mission to tackle real
          problems and create captivating, functional, and user-friendly
          experiences.
        </p>
        <p className="font-source text-xl leading-7">
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
        </p>
        <p className="relative font-source text-3xl font-bold italic leading-10 mt-4">
          <Quote className="absolute -left-14" />A product designer with over 5
          years of experience working across design systems, user experience,
          and accessibility.
        </p>
        <Image
          className="my-4"
          src={"/assets/laura-flores.jpeg"}
          alt={"a profile picture of Laura"}
          width={739}
          height={492}
        />
        <p className="font-source text-xl leading-7">
          My journey into design started from a completely different path—I
          spent four years as a Primary School Teacher. However, fueled by
          curiosity I ventured into the digital world to explore the realm of
          user-centered design. In 2019, I took a significant step in my
          professional growth by enrolling in Ironhack{"'"}s UX/UI Bootcamp,
          propelling my career forward and fostering an environment of
          continuous learning.
        </p>
        <p className="font-source text-xl leading-7">
          While design is my primary focus, I also enjoy challenging myself in
          other areas, including expanding my knowledge in front-end
          development.
        </p>
        <p className="font-source text-xl leading-7">
          Beyond the tech world, I{"'"}m passionate about CrossFit, yoga, cats,
          and whipping up culinary wonders in the kitchen. Food is not just
          sustenance for me; it{"'"}s my second language.
        </p>
        <p className="font-source text-xl leading-7 mb-10">
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
        </p>
        <h2 className="font-extrabold text-3xl">Fun facts about me</h2>
        <ul className="list-disc list-outside marker marker:flex pl-4 flex flex-col gap-4 font-source text-xl leading-7 mb-12">
          <li>
            Not only am I a designer, but I{"'"}m also a certified yoga teacher,
            spreading mindfulness and flexibility both on and off the mat.
          </li>
          <li>
            I{"'"}ve had the incredible opportunity to call several vibrant
            cities home, including New York, Dublin, Madrid, and my beloved
            Sevilla, each leaving an indelible mark on my journey.
          </li>
          <li>
            I{"'"}m completely obsessed with perfecting the art of homemade
            pizza.{" "}
          </li>
          <li>
            I{"'"}m a true DIY enthusiast, always eager to embark on creative
            projects and bring my imagination to life.
          </li>
          <li>
            Board game aficionado alert! After playing a new board game, I can
            {"'"}t resist the temptation to add it to my ever-growing
            collection.
          </li>
          <li>
            Music is my ultimate jam, and I can{"'"}t get enough of talented
            producers like Flume, Pluko, Vance Joy, Benny Blanco, PLÜM, and San
            Holo. Their mind-blowing melodies never fail to captivate my ears
            and ignite my creative fire.
          </li>
        </ul>
      </div>
      <div className="grid grid-rows-2 gap-2 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-2 w-124">
          <div className="h-80 relative">
            <Image
              src={"/assets/feet.png"}
              alt={"Handstand feet"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-80 relative">
            <Image
              src={"/assets/diy.png"}
              alt={"crafts"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-80 relative">
            <Image
              src={"/assets/landscape.png"}
              alt={"clouds landscape"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 w-124">
          <div className="h-80 col-span-1 relative">
            <Image
              src={"/assets/trees.png"}
              alt={"palm trees"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-80 col-span-2 relative">
            <Image
              src={"/assets/pizza.png"}
              alt={"pizza sign"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-80 col-span-3 relative">
            <Image
              src={"/assets/jenga.png"}
              alt={"jenga"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
