"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import Title from "@/components/design system/Title";

export default function Avatars() {
  return (
    <div className="bg-background min-h-screen font-figtree [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Header */}
      <div className="w-full border-b border-border">
        <header className="container mx-auto max-w-screen-xl">
          <div className="border-x border-border flex justify-between items-center">
            <Link className="cursor-pointer" href="/">
              <div className="pl-1 hover:bg-white/70 hover:text-black"><Logo /></div>
            </Link>
            <MenuDesktop className="hidden lg:flex" />
            <MenuPhone className="flex lg:hidden" />
          </div>
        </header>
      </div>

      {/* Cover image section */}
      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          <div className="w-full aspect-[16/9] max-h-[469px]">
            <Image
              src="/assets/avatars.png"
              alt="Three avatars"
              width={1280}
              height={720}
              className="w-full h-full"
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Introduction section */}
      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          <div className="px-12 pt-24 py-6">
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              <label className="text-base font-medium font-jetbrains-mono">ILLUSTRATION SYSTEM</label>
              <h1 className="text-5xl font-medium">
                Avatars<br />
                <span className="font-cormorant italic">A playful doodle illustration system</span>
              </h1>
              <Paragraph>
                Avatars is a playful doodle illustration system that I crafted in Figma, designed to spark creativity through its versatile range of variants. With this system, you have the power to mix and match various illustrations, allowing you to create a myriad of unique avatars.
              </Paragraph>
              <Quote>
                The main goal of this project was to embark on an enjoyable exploration of Figma components while indulging in the art of doodling.
              </Quote>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          <div className="px-12 py-6">
            {/* Project details section */}
            <div className="max-w-3xl mx-auto grid grid-cols-4 gap-4">
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Role</h3>
                <p className="text-sm font-medium">Designer</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                <p className="text-sm font-medium">Illustration System</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                <p className="text-sm font-medium">March 19th, 2021</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">1 day</p>
              </div>
            </div>

            {/* Main content */}
            <div className="px-12 pt-16 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Title>How I Created the Illustration System</Title>
                  <Paragraph>
                    To begin, I let my creativity flow as I sketched various faces adorned with distinct hairstyles, clothes, and facial expressions on separate sheets of paper. Utilizing a head template, I ensured that all the body parts shared a uniform size.
                  </Paragraph>
                  <figure>
                    <Image
                      src="/assets/avatarsblog1.png"
                      alt="Doodles exploration"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                      className="rounded-lg border border-border"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      Doodles exploration
                    </figcaption>
                  </figure>
                  <Paragraph>
                    Once I felt satisfied with the diverse range of variations, I captured a photograph of all the doodles and then proceeded to vectorise them in Illustrator, meticulously crafting individual body parts.
                  </Paragraph>
                  <Paragraph>
                    Here are the final vectorised expressions, hairstyles, and clothing options:
                  </Paragraph>
                  <figure>
                    <Image
                      src="/assets/avatarsblog2.png"
                      alt="Final Vectorised Expressions, Hairstyles, and Clothing"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                      className="rounded-lg border border-border"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      Final Vectorised Expressions, Hairstyles, and Clothing
                    </figcaption>
                  </figure>
                  <Paragraph>
                    As a final step, I transferred these elements into Figma, enabling the creation of different variants. Now, you have the freedom to combine and assemble various body parts as you please, crafting your very own unique avatar.
                  </Paragraph>
                  <Image
                    src="/assets/avatarsblog3.gif"
                    alt="Avatars Gif"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NextBack 
        prev={{
          href: "/theatremode",
          text: "Theatre mode"
        }}
        next={{
          href: "/inbolt",
          text: "Inbolt"
        }}
      />

      {/* Footer */}
      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}
