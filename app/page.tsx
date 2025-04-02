"use client";

import { useState } from "react";
import ProjectCover from "@/components/ProjectCover";
import Link from "next/link";
import type { ProjectFilterType } from "@/types";
import { projects } from "@/utils/projects";
import Footer from "./Footer";
import CursorArrow from "@/components/CursorArrow";
import GumroadLogo from "@/components/GumroadLogo";
import AntiworkLogo from "@/components/AntiworkLogo";
import NectarLogo from "@/components/NectarLogo";
import FlexileLogo from "@/components/FlexileLogo";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import BeezyLogo from "@/components/BeezyLogo";
import LexiconLogo from "@/components/LexiconLogo";
import BuildguidlLogo from "@/components/BuildguidlLogo";
import LiferayLogo from "@/components/LiferayLogo";

const TOOLKIT_ITEMS = [
  'Figma',
  'Design Systems',
  'Icons',
  'UX/UI Design',
  'Product Design',
  'Mobile Design',
  'Responsive Design',
  'Accessibility',
  'HTML',
  'CSS',
  'JavaScript',
  'Next.js',
  'Tailwind CSS',
  'Shadcn',
  'Github',
  'iTerm',
  'Cursor',
  'Devin',
  'v0',
  'ChatGPT'
] as const;

export default function Home() {
  const [filter, setFilter] = useState<ProjectFilterType>("all");

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

      {/* Main content */}
      <div className="w-full border-b border-border">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          {/* Header section */}
          <div className="px-12 pt-48 pb-56 relative">
            {/* Circle with arrow */}
            <div className="absolute left-1/2 bottom-0 -mb-5 -translate-x-1/2">
              <button 
                onClick={() => {
                  const element = document.getElementById('experience');
                  if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const absoluteElementTop = elementRect.top + window.pageYOffset;
                    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
                    window.scrollTo({ top: middle, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background font-figtree font-medium text-base"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="font-bold text-7xl">
              Creating fresh,<br /> memorable <span className="font-cormorant italic font-semibold">
                <div className="inline-block border-2 border-blue px-2 relative">
                  experiences
                  {/* Corner elements */}
                  <div className="absolute -left-2 -top-2 w-3 h-3 border-2 border-blue bg-background"></div>
                  <div className="absolute -right-2 -top-2 w-3 h-3 border-2 border-blue bg-background"></div>
                  <div className="absolute -left-2 -bottom-2 w-3 h-3 border-2 border-blue bg-background"></div>
                  <div className="absolute -right-2 -bottom-2 w-3 h-3 border-2 border-blue bg-background"></div>
                  {/* Cursor and pink label */}
                  <div className="absolute -right-24 top-full mt-2 flex flex-col items-end">
                    <div className="relative w-full">
                      <CursorArrow className="absolute -left-32 " />
                      <div className="absolute -right-2 -bottom-16 font-jetbrains-mono border-accentLight border-2 bg-accent text-white px-4 py-1.5 rounded-r-full rounded-bl-full text-base font-medium">
                        laugardie
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="text-base pt-6">
              Laura García Diéguez—Senior Product designer <Link href="https://gumroad.com/" className="text-accent">@Gumroad</Link>
           </div>
           </div>
        </div>
      </div>

      <div className="w-full border-b border-border">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          {/* Experience section */}
          <section 
            id="experience" 
            className="pt-24 pb-36 px-12 flex flex-col items-center"
          >
            <label className="text-center mb-6 text-base font-medium font-jetbrains-mono">EXPERIENCE</label>
            <h2 className="text-center mb-16 text-5xl font-medium">
              Designing systems, shaping<br />
              products, driving <span className="italic font-cormorant">growth</span>.
            </h2>

            <div className="grid grid-cols-3 gap-x-14">
              <div className="text-center">
                <h3 className="mb-4 text-l font-jetbrains-mono font-base">Design Systems</h3>
                <div className="space-y-6">
                  <Link 
                    href="https://www.figma.com/community/file/1405573618937136138" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg"
                  >
                    <GumroadLogo />
                  </Link>
                  <div 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg"
                  >
                    <NectarLogo />
                  </div>
                  <Link 
                    href="https://liferay.design/lexicon/get-started" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg group"
                  >
                    <LexiconLogo />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-l font-jetbrains-mono font-base">Products</h3>
                <div className="space-y-6">
                  <Link 
                    href="https://gumroad.com" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg"
                  >
                    <GumroadLogo />
                  </Link>
                  <Link 
                    href="https://flexile.com" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg"
                  >
                    <FlexileLogo />
                  </Link>
                  <Link 
                    href="https://buidlguidl.com/" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg group"
                  >
                    <BuildguidlLogo />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-l font-jetbrains-mono font-base">Companies</h3>
                <div className="space-y-6">
                  <Link 
                    href="https://antiwork.com" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg"
                  >
                    <AntiworkLogo />
                  </Link>
                    <Link 
                      href="https://www.appspace.com/intranet/" 
                      target="_blank" 
                      className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg group"
                    >
                      <BeezyLogo />
                    </Link>
                  <Link 
                    href="https://www.liferay.com/" 
                    target="_blank" 
                    className="flex items-center justify-center w-[326px] h-[74px] bg-white/70 border border-border hover:bg-black hover:text-white hover:border-black transition-colors px-6 rounded-lg text-lg group"
                  >
                    <LiferayLogo />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full border-b border-border">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          {/* Work section */}
          <section className="pt-24 px-12">
            <label className="text-center block mb-6 text-base font-medium font-jetbrains-mono uppercase">Workplay</label>
            <h2 className="text-center mb-16 text-4xl md:text-5xl font-medium">
              The way I make sense<br />
              of the <span className="font-cormorant italic">world</span>, one pixel at a time.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pb-36">
              <ProjectCover 
                key="gumroad-design-system"
                href="https://www.figma.com/community/file/1405573618937136138"
                src="/assets/gumroad-cover.png"
                alt="Gumroad Design System"
                name="Gumroad"
                role="Design System"
                year="2024"
              />
              {projects
                .filter((project) => filter === "all" || project.tag.includes(filter))
                .sort((a, b) => {
                  const getYear = (project: typeof a) => {
                    switch (project.name) {
                      case "Daylight Calculator": return 2023;
                      case "BuidlGuidl Ethereum":
                      case "Nectar": return 2022;
                      case "Gumroad":
                      case "Avatars":
                      case "Inbolt":
                      case "Theatre mode":
                      case "Calquo": return 2021;
                      case "Goeat":
                      case "Lexicon":
                      case "Whatsapp polls": return 2019;
                      default: return 2020;
                    }
                  };
                  return getYear(b) - getYear(a);
                })
                .map((project) => {
                  return <ProjectCover 
                    key={project.name} 
                    {...project} 
                    year={project.name === "Gumroad" ? "2021" :
                          project.name === "Goeat" ? "2019" :
                          project.name === "Lexicon" ? "2019" :
                          project.name === "Avatars" ? "2021" :
                          project.name === "Whatsapp polls" ? "2019" :
                          project.name === "Inbolt" ? "2021" :
                          project.name === "Theatre mode" ? "2021" :
                          project.name === "Nectar" ? "2022" :
                          project.name === "Calquo" ? "2021" :
                          project.name === "BuidlGuidl Ethereum" ? "2022" :
                          project.name === "Daylight Calculator" ? "2023" : "2020"
                    }
                  />;
                })}
            </div>
          </section>
        </div>
      </div>

      <div className="w-full border-b border-border">
        <div className="container mx-auto max-w-screen-xl border-x border-border">
          {/* Toolkit section */}
          <section className="pt-24 px-12">
            <label className="text-center block mb-6 text-base font-medium font-jetbrains-mono uppercase">Toolkit</label>
            <h2 className="text-center mb-14 text-4xl md:text-5xl font-medium">
              Designing <span className="font-cormorant italic">smarter</span>,<br />
              coding <span className="font-cormorant italic">faster</span>.
            </h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-[942px] mx-auto pb-36">
              {TOOLKIT_ITEMS.map((tool) => (
                <span 
                  key={tool}
                  className="h-12 px-6 flex items-center rounded-full border border-border bg-white/70 font-medium text-sm text-black"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto max-w-screen-xl border-x border-border relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L12 4M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
