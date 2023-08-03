import Blinks from "@/components/Blinks";
import ProjectCover from "@/components/ProjectCover";
import Scribble from "@/components/Scribble";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl pt-52">
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
      <div className="grid grid-cols-2 gap-16 gap-y-24">
        <ProjectCover
          src="/assets/gumroad-cover.png"
          href="/gumroad"
          name="Gumroad"
          role="Product Design"
          alt="Gumroad logo"
        />
        <ProjectCover
          src="/assets/buidlguidl-cover.png"
          href="/buidlguidl"
          name="BuidlGuidl Ethereum"
          role="Web Design"
          alt="Buidlguidl logo"
        />
        <ProjectCover
          src="/assets/theatremode-cover.png"
          href="/theatremode"
          name="Theatre mode"
          role="Feature Design"
          alt=""
        />
        <ProjectCover
          src="/assets/nectar-cover.png"
          href="/nectar"
          name="Nectar"
          role="Design System"
          alt="Nectar logo"
        />
        <ProjectCover
          src="/assets/avatars-cover.png"
          href="/avatars"
          name="Avatars"
          role="Illustration System"
          alt="Hand drawn illustration of a girl smiling"
        />
        <ProjectCover
          src="/assets/inbolt-cover.png"
          href="/inbolt"
          name="Inbolt"
          role="UI Design"
          alt="A screenshot of the inbolt app dashboard"
        />
        <ProjectCover
          src="/assets/lexicon-cover.png"
          href="/lexicon"
          name="Lexicon"
          role="Design System"
          alt="Lexicon logo"
        />
        <ProjectCover
          src="/assets/whatsapp-cover.png"
          href="/whatsapp"
          name="Whatsapp polls"
          role="Feature Design"
          alt="Mobile showing whatsapp polls screen"
        />
        <ProjectCover
          src="/assets/goeat-cover.png"
          href="/goeat"
          name="Goeat"
          role="UX/UI Design"
          alt="Hand holding a phone with goeat app"
        />
        <ProjectCover
          src="/assets/calquo-cover.png"
          href="/calquo"
          name="Calquo"
          role="Product Design"
          alt="A screenshot of the calquo app dashboard"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
