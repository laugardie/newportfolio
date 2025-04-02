"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import NextBack from "@/components/NextBack";
import Paragraph from "@/components/design system/Paragraph";

export default function Inbolt() {
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
              src="/assets/inbolt.png"
              alt="Inbolt dashboard"
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
              <label className="text-base font-medium font-jetbrains-mono">UI DESIGN</label>
              <h1 className="text-5xl font-medium">
                Inbolt<br />
                <span className="font-cormorant italic">A dashboard for freelancers</span>
              </h1>
              <Paragraph>
                Inbolt is a personal UI project where I designed a dashboard specifically for freelancers{"'"} invoices.
              </Paragraph>
              <Paragraph>
                As a freelancer myself, the challenges of tracking and sending invoices became a personal hurdle. Being in the same boat as countless freelancers, I felt the frustration of managing invoices without a seamless tool. This struggle ignited the idea for Inbolt, a dashboard designed with a touch of personal experience.
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
                <p className="text-sm font-medium">Designer</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                <p className="text-sm font-medium">Dashboard UI</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                <p className="text-sm font-medium">September 14th, 2021</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">1 day</p>
              </div>
            </div>

            {/* Main content */}
            <div className="px-12 pt-16 pb-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Paragraph>
                  My approach to this design centers around users, keeping things straightforward and clear to elevate both usability and visual appeal.                  </Paragraph>
                  <figure>
                    <Image
                      src="/assets/inboltblog1.png"
                      alt="Inbolt dashboard"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", width: "100%", height: "auto" }}
                      sizes="100vw"
                      className="rounded-lg border border-border"
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                      Inbolt dashboard
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NextBack 
        prev={{
          href: "/avatars",
          text: "Avatars"
        }}
        next={{
          href: "/calquo",
          text: "Calquo"
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
