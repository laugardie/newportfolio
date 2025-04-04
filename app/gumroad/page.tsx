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
                src="/assets/gumroad-cover.png"
                alt="Gumroad Design System"
                width={1280}
                height={720}
                className="w-full h-full"
                sizes="100vw"
                style={{ objectFit: "contain", backgroundColor: "#FECA3D" }}
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
                  Gumroad<br />
                </h1>
                <Paragraph>
                  I had a blast as a Product Designer at <a href="https://gumroad.com" target="_blank" className="underline hover:text-accent">Gumroad</a>, an online hub for creators, where I worked for a year and a half. During my time there, I worked on many different features, contributed to the design system, and even tried my hand at some coding...
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
                  <Title>New checkout</Title>
                  <Paragraph>
                    I was responsible for revamping the checkout design and implementing UX improvements. Additionally, I actively contributed to the coding aspect, including the integration of some checkout components into the team library.
                  </Paragraph>
                  <Paragraph>
                    The new checkout now features its very own dedicated page. It&apos;s your one-stop-shop for buying single items, loading up your cart with multiple products, and snagging those sweet discounts, whether it&apos;s a single or multiple ones.
                  </Paragraph>
                  <figure>
                    <Image
                      src="/assets/gumroadblog1.png"
                      width={0}
                      height={0}
                      alt="Gumroad's new checkout"
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      New checkout page
                    </figcaption>
                  </figure>
                  <Title>Team support</Title>
                  <Paragraph>
                    I took the lead in crafting this feature&apos;s design. With Team
                    support, we made it super easy for creators to switch back and forth
                    between their personal and team accounts without any pesky logouts.
                  </Paragraph>
                  <figure>
                    <Image
                      src="/assets/gumroadblog2.png"
                      width={0}
                      height={0}
                      alt="Gumroad's new teams support feature"
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      Team support settings
                    </figcaption>
                  </figure>
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
