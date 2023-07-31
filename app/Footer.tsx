import Scribble2 from "@/components/Scribble2";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-12 container mx-auto px-72 mb-32">
      <div className="flex items-end justify-start pt-32">
        <div className="font-inter font-extrabold text-8xl">
          Let{`'`}s work
          <br />
          together.
        </div>
        <Scribble2 />
      </div>
      <div className="flex items-start justify-between">
        <div>
          Designed and coded with coffee and while holding my newborn son.
          <br></br>
          ©2023
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
            href="https://www.linkedin.com/in/laugardie/"
            target="_blank"
          >
            Linkedin
          </a>
          <a className="underline" href="">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
