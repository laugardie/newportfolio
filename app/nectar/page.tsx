"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";

export default function Nectar() {
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
              src="/assets/nectar.png"
              alt="Nectar Design System"
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
                Nectar<br />
                <span className="font-cormorant italic">A design system built from scratch</span>
              </h1>
              <Paragraph>
                During my time at{" "}
                <a href="https://www.beezy.net/" className="underline hover:text-accent">
                  Beezy
                </a>
                , I embraced an exciting challenge – building a brand-new design system from scratch. This meant not just creating the essential foundations, such as developing tools, refining processes, establishing naming conventions, defining organizational structures, crafting a unique brand identity, and creating a memorable logo, but it also involved the seamless integration of fresh components into our team's Figma library.
              </Paragraph>
              <Paragraph>
              I made sure to keep these resources current, so our design system, which I proudly named "Nectar", always stayed up-to-date and incredibly useful for the team. This allowed us to enhance our design workflow but also fostered a sense of unity and consistency across all our projects.</Paragraph>
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
                <p className="text-sm font-medium">January 21st, 2022</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">3 months</p>
              </div>
            </div>

            {/* Main content */}
            <div className="px-12 pt-16 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <figure>
                    <Image
                      src="/assets/nectarblog1.png"
                      alt="A Glimpse into the Nectar Design System"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                      className="rounded-lg border border-border"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      A Glimpse into the Nectar Design System
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
          href: "/buidlguild",
          text: "BuidlGuild"
        }}
        next={{
          href: "/gumroad",
          text: "Gumroad"
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
