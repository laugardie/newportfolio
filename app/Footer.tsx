import Scribble2 from "@/components/Scribble2";

export default function Footer() {
  return (
    <div className="flex flex-col gap-12 mx-auto mb-32 container 3xl:max-w-screen-4xl lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-md max-w-xs">
      <div className="flex flex-col md:flex-row md:items-end justify-start pt-24 md:pt-32 gap-4">
        <div className="font-inter font-extrabold text-6xl md:text-7xl lg:text-8xl">
          Let{`'`}s work
          <br />
          together.
        </div>
        <Scribble2 />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div>
          Designed and coded personally by me using Figma, Tailwindcss and
          Nextjs. ©2023
        </div>
        <div className="flex space-x-4">
          <a
            className="underline"
            href="mailto:laugardie89@gmail.com"
            target="_blank"
          >
            Email
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/laugardie/?locale=en_US"
            target="_blank"
          >
            Linkedin
          </a>
          <a className="underline" href="cv - laura garcia.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
