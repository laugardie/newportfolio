"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import NextBack from "@/components/NextBack";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import Paragraph from "@/components/design system/Paragraph";

export default function DaylightCalculator() {
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
              src="/assets/daylightcalculator.jpg"
              alt="daylight calculator"
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
              <label className="text-base font-medium font-jetbrains-mono">PRODUCT DESIGN</label>
              <h1 className="text-5xl font-medium">
                Daylight Calculator<br />
                <span className="font-cormorant italic">A daylight predictor tool</span>
              </h1>
              <Paragraph>
                The Daylight Calculator project, developed by{" "}
                <a href="https://whitearkitekter.com/" className="underline hover:text-accent">
                  White Arkitekter
                </a>
                , sheds light on daylighting assessments according to Swedish standards. It offers a user-friendly way to evaluate room illumination using just four essential parameters: window dimensions, room height, room depth, and daylight access.
              </Paragraph>
              <Paragraph>
                This tool plays a pivotal role in assessing compliance with Swedish daylight requirements, especially in the context of high-density urban developments. It seamlessly integrates into the workflows of architects and urban planners, enabling them to evaluate and compare various urban layouts in terms of daylight access.
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
                <p className="text-sm font-medium">Product Design</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                <p className="text-sm font-medium">May 7th, 2023</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">1 week</p>
              </div>
            </div>

            {/* Main content */}
            <div className="px-12 pt-16 pb-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Paragraph>
                    In this project, my role involved enhancing the visual design and addressing several UX issues like:
                  </Paragraph>
                  <BulletedList>
                    <BulletedListItem>Designing a project dashboard.</BulletedListItem>
                    <BulletedListItem>Enhancing the overall experience of creating a new project.</BulletedListItem>
                    <BulletedListItem>Implementing a visual indicator for model uploads.</BulletedListItem>
                    <BulletedListItem>Improving the presentation of model layers.</BulletedListItem>
                    <BulletedListItem>Enabling users to easily toggle the visibility of layers.</BulletedListItem>
                    <BulletedListItem>Implementing a way to help users identify invalid objects within layers.</BulletedListItem>
                    <BulletedListItem>Allowing users to modify layer properties.</BulletedListItem>
                    <BulletedListItem>Enhancing the visual design of results to help users understand the assesment in a friendly way.</BulletedListItem>
                  </BulletedList>
                  <figure>
                    <Image
                      src="/assets/whiteblog1.png"
                      alt="A Glimpse into the Daylight Calculator"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                      className="rounded-lg border border-border"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      A Glimpse into the Daylight Calculator
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border"></div>
        </div>
      </div>

      {/* Navigation */}
      <NextBack 
        prev={{
          href: "/calquo",
          text: "Calquo"
        }}
        next={{
          href: "/lexicon",
          text: "Lexicon"
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
