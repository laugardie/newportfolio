"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";
import Title from "@/components/design system/Title";

export default function Gumroad() {
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
                src="/assets/gumroad-ds.png"
                alt="Gumroad Design System"
                width={1280}
                height={720}
                className="w-full h-full"
                sizes="100vw"
                style={{ objectFit: "cover", backgroundColor: "#FECA3D" }}
              />
            </div>
            <div className="border-t border-border"></div>
          </div>

          {/* Introduction section */}
          <div className="w-full">
            <div className="px-6 md:px-12 pt-16 md:pt-24 py-6">
              <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                <label className="text-base font-medium font-jetbrains-mono">PRODUCT DESIGN</label>
                <h1 className="text-5xl font-medium">
                  Publishing Gumroad&apos;s Design System
                </h1>
                <Paragraph>
                  I collaborated with Laura Garcia and Maya to revamp and publish Gumroad&apos;s design system. We undertook this significant project to standardize our design system across Figma and code, leveraging Figma&apos;s latest component and variable features.
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
                  <p className="text-sm font-medium">Product Design</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                  <p className="text-sm font-medium">2021 - 2022</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                  <p className="text-sm font-medium">1 year and 5 months</p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="px-6 md:px-12 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Title>The Challenge</Title>
                  <Paragraph>
                    We were losing time in development due to lack of alignment on our design system, and we also planned to eventually open source our codebase. In 2024, we undertook the big task of revamping and standardizing our design system across Figma and in code.
                  </Paragraph>
                  
                  <Title>Designer/Developer Experience</Title>
                  <Paragraph>
                    Our design system revamp focused on two key areas: improving DX (designer and developer experience) by creating scalable yet flexible components, and establishing a shared language between designers and developers to minimize miscommunication.
                  </Paragraph>
                  
                  <figure>
                    <Image
                      src="/assets/gumroadblog1.png"
                      width={0}
                      height={0}
                      alt="Gumroad's design system components"
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      Design system components in Figma
                    </figcaption>
                  </figure>

                  <Title>Color System</Title>
                  <Paragraph>
                    I led a comprehensive overhaul of our color variables to establish a robust semantic system that intuitively handles light and dark modes. The goal was perfect parity between design and code—ensuring designers and developers work with identical variables. We kept the system intentionally lean to make it more maintainable and scalable.
                  </Paragraph>

                  <figure>
                    <Image
                      src="/assets/gumroadblog2.png"
                      width={0}
                      height={0}
                      alt="Gumroad's color system"
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      Color system documentation
                    </figcaption>
                  </figure>

                  <Title>Open Source Future</Title>
                  <Paragraph>
                    Built on the philosophy of building in public, we made our design system public to continue Gumroad&apos;s tradition of transparency. This collaborative approach not only makes our products better but also strengthens the entire ecosystem that many creators rely on for income.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <NextBack 
            prev={{
              href: "/nectar",
              text: "Nectar"
            }}
            next={{
              href: "/theatremode",
              text: "Theatre mode"
            }}
          />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
