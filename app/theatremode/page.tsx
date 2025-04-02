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
import NumberedList from "@/components/design system/NumberedList";
import NumberedListItem from "@/components/design system/NumberedListItem";

export default function TheatreMode() {
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
              src="/assets/theatremode.png"
              alt="Theatre mode feature"
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
              <label className="text-base font-medium font-jetbrains-mono">FEATURE DESIGN</label>
              <h1 className="text-5xl font-medium">
                Theatre Mode<br />
                <span className="font-cormorant italic">Seamlessly access information and focus on what really matters</span>
              </h1>
              <Paragraph>
                During my time at{" "}
                <a href="https://www.beezy.net/" className="underline hover:text-accent">
                  Beezy
                </a>
                , I took charge of designing a feature known as <i>Theatre Mode</i>. Beezy is a modern intranet that's part of the Appspace workplace experience platform.
              </Paragraph>
              <Paragraph>
                This feature centers around a modal interface, providing a seamless way to view attached documents, photos, videos, PDFs, and more, all while enabling real-time commenting and reacting. What sets this feature apart is its adaptability - users can dive into content within the modal or immerse themselves in a distraction-free full-screen mode.
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
                <p className="text-sm font-medium">Feature Design</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                <p className="text-sm font-medium">August 17th, 2021</p>
              </div>
              <div className="bg-white/70 border border-border rounded-lg p-3">
                <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                <p className="text-sm font-medium">2 weeks</p>
              </div>
            </div>

            {/* Main content */}
            <div className="px-12 pt-16 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-6">
                  <Title>The problem</Title>
                  <Paragraph>
                    The Theatre Mode feature addresses two key pain points:
                  </Paragraph>
                  <NumberedList>
                    <NumberedListItem>
                      <strong>Navigating content challenges:</strong> With Theatre Mode, there's no need to download documents to access them. This eliminates the hassle of downloading, saving, and managing files, providing users with immediate access to the information they need.
                    </NumberedListItem>
                    <NumberedListItem>
                      <strong>Loss of time:</strong> Theatre Mode creates a unified space where users can seamlessly interact with the attached information. Instead of navigating away to view or comment on documents, users can engage directly within the same interface, streamlining their workflow and enhancing their productivity.
                    </NumberedListItem>
                  </NumberedList>
                  <Title>The solution</Title>
                  <Paragraph>
                  Theatre Mode optimizes the user experience. It minimizes disruptions, empowers users to engage directly with the content they need, and ultimately fosters a more efficient and productive work environment within Beezy's digital workplace platform.
                  </Paragraph>
                  <Image
                    src="/assets/theatremodeblog1.png"
                    alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Title>Distraction-free experience</Title>
                  <Paragraph>
                  Theatre Mode creates a distraction-free environment, allowing users to focus solely on the content they need. This immersive experience ensures that users can engage with the attached information without being distracted by other interface elements.
                  </Paragraph>
                  <Image
                    src="/assets/theatremodeblog2.png"
                    alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Title>Content thumbnails</Title>
                  <Paragraph>
                  Thumbnails provides users with an efficient way to distinguish between various types of attached content within the modal and to effortlessly choose the specific content they wish to view.
                  </Paragraph>
                  <Image
                    src="/assets/theatremodeblog3.png"
                    alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Paragraph>
                  Users can flip through attached content effortlessly with a cool horizontal scrolling, and an intuitive hint guides them towards hidden elements, ensuring a comprehensive viewing experience. To access these elements, users can either scroll horizontally through the thumbnails or conveniently tab through them, effortlessly transitioning from one thumbnail to another.
                  </Paragraph>
                  <Image
                    src="/assets/theatremodeblog5.png"
                    alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Title>Comments and likes</Title>
                  <Paragraph>
                  The right panel enables a dynamic side-by-side display of content and comments. Users can effortlessly engage with comments while simultaneously viewing the content, fostering real-time collaboration and offering insight into ongoing discussions.
                  </Paragraph>
                  <Image
                    src="/assets/theatremodeblog4.png"
                    alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Title>Content display</Title>
                  <Paragraph>
                  Whether it's images, documents, videos, or PDFs, the modal is an all-in-one hub. With a user-friendly interface, you can seamlessly toggle between different types of content, giving you the flexibility to engage with your attachments just the way you want. No more switching windows or hunting for files. It's all right there, neatly organized for your convenience.
                  </Paragraph>
                  <Paragraph>
                  Check out the image below to see how we've displayed various types of content.
                  </Paragraph>
                  <Image
                    src="/assets/theatremodeblog6.png"
                    alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Title>Hide/Show thumbnails</Title>
                  <Paragraph>
                  In a content-packed modal, you have the power to control your experience. Toggle the content thumbnails on or off for a smoother journey through your attachments. It's all about tailoring the experience to what suits users best!
                  </Paragraph>
                  <figure>
                    <Image
                      src="/assets/theatremodeblog7.png"
                      alt="Theatre mode"
                    width={1280}
                    height={720}
                    className="w-full h-full"
                    sizes="100vw"
                      style={{ objectFit: "cover" }}
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                    Hide thumbnails
                    </figcaption>
                  </figure>
                  <figure>
                    <Image
                      src="/assets/theatremodeblog8.png"
                      alt="Theatre mode"
                      width={1280}
                      height={720}
                      className="w-full h-full"
                      sizes="100vw"
                      style={{ objectFit: "cover" }}
                    />
                    <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                    Show thumbnails
                    </figcaption>
                  </figure>
                  <Paragraph>
                  In conclusion, Theatre Mode isn't just a feature; it's a transformative tool that reshapes how we engage with content and collaborate within the digital workspace. By addressing the pain points of distraction, simplifying content interaction, and valuing every second saved, this innovation aligns with Beezy's commitment to enhancing productivity and fostering seamless communication. As we step into an era of ever-evolving work dynamics, Theatre Mode stands as a testament to the power of user-centric design in making work not just efficient, but enjoyable.
                  </Paragraph>
                  <p className="text-sm font-cormorant italic text-gray-600">
                  * Photos by <a href="https://unsplash.com/en/@mkmasdos" target="_blank" rel="noopener noreferrer">MK +2</a> at <a href="https://unsplash.com/%20en/photos/7R1eUOlI24M" target="_blank" rel="noopener noreferrer">Unsplash</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NextBack 
        prev={{
          href: "/gumroad",
          text: "Gumroad"
        }}
        next={{
          href: "/avatars",
          text: "Avatars"
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
