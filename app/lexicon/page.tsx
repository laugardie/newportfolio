"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import MetaProps from "@/components/MetaProp";
import NextBack from "@/components/NextBack";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import Caption from "@/components/design system/Caption";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import Title from "@/components/design system/Title";

export default function Lexicon() {
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
              src="/assets/lexicon.svg"
              alt="Lexicon cover"
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
              <label className="text-base font-medium font-jetbrains-mono">DESIGN SYSTEM</label>
              <h1 className="text-5xl font-medium">
                Lexicon<br />
                <span className="font-cormorant italic">An open source design system</span>
              </h1>
              <Paragraph>
               During my time at Liferay, I had the privilege to contribute to the <a href="https://liferay.design/lexicon/" className="underline hover:text-accent">Lexicon Design System</a>. It not only offered me the opportunity to immerse myself in the world of design consistency, collaboration, and innovation but also served as the catalyst that ignited my passion for Design Systems.
              </Paragraph>
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
                <p className="text-sm font-medium">Product Designer</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                <p className="text-sm font-medium">Design System</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                <p className="text-sm font-medium">October, 2019</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">9 months</p>
              </div>
            </div>
            {/* Main content */}
            <div className="px-12 pt-16 pb-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-6">
                <figure>
                  <Image
                    src="/assets/liferay.jpeg"
                    alt="Liferay"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                    The Design System Team and the Research Team working on a Heuristic project at Liferay.
                  </figcaption>
                </figure>
                <Paragraph>
                The Lexicon Design System provides a common framework for building interfaces within the Liferay product ecosystem to provide a unified experience to its users. In this project, I dived deep into crafting user-centric components, fostering accessibility, and nurturing a harmonious design language that resonates with users on a profound level.
                </Paragraph>
                <Paragraph>
                As you explore the following sections, you can witness the evolution of some of my contributions to the Lexicon Design System.  
                </Paragraph>
                <BulletedList>
                  <BulletedListItem>
                    <a href="https://liferay.design/lexicon/core-components/buttons/action-buttons/" className="underline hover:text-accent">Action Buttons</a>
                  </BulletedListItem>
                  <BulletedListItem>
                    <a href="https://liferay.design/lexicon/core-components/dual-listbox/" className="underline hover:text-accent">Dual Listbox</a>
                  </BulletedListItem>
                  <BulletedListItem>
                    <a href="https://liferay.design/lexicon/core-components/keys/" className="underline hover:text-accent">Keys</a>
                  </BulletedListItem>
                  <BulletedListItem>
                    <a href="https://liferay.design/lexicon/core-components/labels/" className="underline hover:text-accent">Labels</a>
                  </BulletedListItem>
                  <BulletedListItem>
                    <a href="https://liferay.design/lexicon/core-components/modals/" className="underline hover:text-accent">Modals</a>
                  </BulletedListItem>
                </BulletedList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NextBack 
        prev={{
          href: "/daylightcalculator",
          text: "Daylight calculator"
        }}
        next={{
          href: "/goeat",
          text: "Goeat"
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
