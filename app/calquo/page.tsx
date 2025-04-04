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
import Title from "@/components/design system/Title";
import Quote from "@/components/design system/Quote";

export default function Calquo() {
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
                src="/assets/calquo.png"
                alt="A screenshot of the calquo app dashboard"
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
                <label className="text-base font-medium font-jetbrains-mono">PRODUCT DESIGN</label>
                <h1 className="text-5xl font-medium">
                  Calquo<br />
                  <span className="font-cormorant italic">A no-code calculator form builder</span>
                </h1>
                <Paragraph>
                  Calquo is a no-code calculator form that empowers businesses to generate leads, boost sales, and enhance engagement, all while minimizing the hassle. This innovative solution emerged from a 2-day design challenge. Following the design phase,{" "}
                  <a className="underline hover:text-accent" href="https://twitter.com/dgrcode">Daniel G. Reina</a>{" "}and{" "}
                  <a className="underline hover:text-accent" href="https://twitter.com/_carletex_">Carlos Sánchez</a>{" "}
                  transformed the concept into a fully functional code.
                </Paragraph>
                <Quote>
                  The objective of this challenge was to create an MVP (Minimum Viable Product) that could be implemented and coded in the future.
                </Quote>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="px-6 md:px-12 pb-6">
              {/* Project details section */}
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Role</h3>
                  <p className="text-sm font-medium">Product Designer</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                  <p className="text-sm font-medium">B2B, SaaS</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                  <p className="text-sm font-medium">March 21st, 2021</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                  <p className="text-sm font-medium">2 days</p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="px-6 md:px-12 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Title>Design challenge results</Title>
                  <Paragraph>
                    The conclusion of the challenge resulted in the following deliverables:
                  </Paragraph>
                  <BulletedList>
                    <BulletedListItem>Log in screen.</BulletedListItem>
                    <BulletedListItem>Dashboard with created calculators.</BulletedListItem>
                    <BulletedListItem>Templates to start creating a calculator.</BulletedListItem>
                    <BulletedListItem>Calculator with different types of inputs: image, numbers, formula, text, sliders, date, email and choice.</BulletedListItem>
                    <BulletedListItem>Visualization of the form.</BulletedListItem>
                  </BulletedList>

                  {/* Images section */}
                  <Image
                    src="/assets/calquoblog1.png"
                    alt="Calquo logo and slogan"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <Image
                    src="/assets/calquoblog2.png"
                    alt="Calquo log in and sign in screen"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <Image
                    src="/assets/calquoblog3.png"
                    alt="Calquo dashboard"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <Image
                    src="/assets/calquoblog4.png"
                    alt="Calquo dashboard"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <Image
                    src="/assets/calquoblog5.png"
                    alt="Calquo dashboard"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <Image
                    src="/assets/calquoblog6.png"
                    alt="Calquo dashboard"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="rounded-lg border border-border"
                  />
                  <Image
                    src="/assets/calquoblog7.png"
                    alt="Calquo dashboard"
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

          {/* Navigation */}
          <NextBack 
            prev={{
              href: "/inbolt",
              text: "Inbolt"
            }}
            next={{
              href: "/daylightcalculator",
              text: "Daylight Calculator"
            }}
          />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
