"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";

export default function Buidlguidl() {
  return (
    <div className="bg-background min-h-screen font-figtree [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Add margin container */}
      <div className="mx-6 md:mx-12">
        <div className="mx-auto max-w-7xl border-x border-border min-h-screen">
          {/* Header */}
          <div className="w-full border-b border-border">
            <header className="lg:px-0 pr-4 pl-0">
              <div className="flex justify-between items-center">
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
            <div className="w-full aspect-[16/9] max-h-[469px]">
              <Image
                src="/assets/buidlguidl.png"
                alt="Buidlguidl"
                width={1280}
                height={720}
                className="w-full h-full"
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="border-t border-border"></div>
          </div>

          {/* Introduction section */}
          <div className="w-full">
            <div className="px-6 md:px-12 pt-16 md:pt-24 py-6">
              <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                <label className="text-base font-medium font-jetbrains-mono">WEB DESIGN</label>
                <h1 className="text-5xl font-medium">
                  Buidlguidl<br />
                  <span className="font-cormorant italic">A community of web3 builders</span>
                </h1>
                <Paragraph>
                  <a
                    href="https://buidlguidl.com/"
                    target="_blank"
                    className="underline hover:text-accent"
                  >
                    BuildGuild
                  </a>{" "}
                  is a curated group of Ethereum builders creating products,
                  prototypes, and tutorials to enrich the web3 ecosystem.
                </Paragraph>
                <Paragraph>
                  I collaborated on the BuildGuild project, contributing my design
                  expertise to various aspects of their website. This included
                  designing the Metamask login interface, and crafting the visuals for
                  the builders page, project list, challenges page, and the profile
                  page.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="px-6 md:px-12 py-6">
              {/* Project details section */}
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Role</h3>
                  <p className="text-sm font-medium">Product Designer</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                  <p className="text-sm font-medium">Web Design</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                  <p className="text-sm font-medium">March 29th, 2022</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                  <p className="text-sm font-medium">1 week</p>
                </div>
              </div>
            </div>
            {/* Main content */}
            <div className="px-6 md:px-12 pt-6 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Paragraph>
                    Here are some screenshots showcasing my contributions to the
                    BuildGuild project:
                  </Paragraph>
                  <Image
                    src="/assets/buidlguidlblog1.png"
                    alt="Buidlguidl profile page"
                    width={0}
                    height={0}
                    style={{ backgroundColor: "white", objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <NextBack 
            prev={{
              href: "/",
              text: "Gumroad Design System"
            }}
            next={{
              href: "/nectar",
              text: "Nectar"
            }}
          />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
