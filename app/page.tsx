import Blinks from "@/components/Blinks";
import ProjectCover from "@/components/ProjectCover";
import Scribble from "@/components/Scribble";
import IconPlus from "@/components/icons/IconPlus";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-8xl pt-52">
      <div className="font-extrabold text-8xl -mb-1">
        <div className="flex flex-start">
          <span>Crafting fresh</span>
          <Blinks />
        </div>{" "}
        experiences for people.
      </div>
      <Scribble />
      <div className="font-source text-xl pt-4 mb-20">
        <b>Laura</b> - Product Designer.<br></br> Currently freelancing.
        Previously{" "}
        <a className="underline" href="https://gumroad.com">
          @Gumroad.
        </a>
      </div>
      <div className="grid grid-cols-4 gap-16 gap-y-24">
        <ProjectCover
          src="/assets/gumroad-cover.png"
          href="/gumroad"
          name="Gumroad"
          role="Product Design"
          alt="Gumroad logo"
        />
        <ProjectCover
          src="/assets/daylight-cover.png"
          href="/calquo"
          name="Daylight calculator"
          role="Product Design"
          alt="A screenshot of the daylight calculator app"
          className="cursor-pointer"
        />
        <ProjectCover
          src="/assets/buidlguidl-cover.png"
          href="/buidlguidl"
          name="BuidlGuidl Ethereum"
          role="Web Design"
          alt="Buidlguidl logo"
        />
        <ProjectCover
          src="/assets/nectar-cover.png"
          href="/nectar"
          name="Nectar"
          role="Design System"
          alt="Nectar logo"
        />
        <ProjectCover
          src="/assets/theatremode-cover.png"
          href="/theatremode"
          name="Theatre mode"
          role="Feature Design"
          alt=""
        />
        <ProjectCover
          src="/assets/avatars-cover.png"
          href="/avatars"
          name="Avatars"
          role="Illustration System"
          alt="Hand drawn illustration of a girl smiling"
        />
        <ProjectCover
          src="/assets/lexicon-cover.png"
          href="/lexicon"
          name="Lexicon"
          role="Design System"
          alt="Lexicon logo"
        />
        <ProjectCover
          src="/assets/inbolt-cover.png"
          href="/inbolt"
          name="Inbolt"
          role="UI Design"
          alt="A screenshot of the inbolt app dashboard"
        />
        <ProjectCover
          src="/assets/calquo-cover.png"
          href="/calquo"
          name="Calquo"
          role="Product Design"
          alt="A screenshot of the calquo app dashboard"
          className="cursor-pointer"
        />
        <ProjectCover
          src="/assets/goeat-cover.png"
          href="/goeat"
          name="Goeat"
          role="UX/UI Design"
          alt="Hand holding a phone with goeat app"
        />
        <ProjectCover
          src="/assets/whatsapp-cover.png"
          href="/whatsapp"
          name="Whatsapp polls"
          role="Feature Design"
          alt="Mobile showing whatsapp polls screen"
        />
        <div>
          <Link
            className="text-center cursor-pointer flex flex-col"
            href="mailto:laugardie89@gmail.com"
            target="_blank"
          >
            <div className="relative border-2">
              <Image
                src="/"
                width={450}
                height={595}
                alt=""
                className="invisible"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center hover:bg-[#f6f6f8]">
                <IconPlus className="mx-auto mb-2" />
                <div className="font-inter font-semibold text-2xl">
                  Add a new project
                </div>
                <div className="font-source text-xl text-lightGray">
                  Design file
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
