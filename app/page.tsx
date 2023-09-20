"use client";

import { useState } from "react";
import Blinks from "@/components/Blinks";
import ProjectCover from "@/components/ProjectCover";
import Scribble from "@/components/Scribble";
import IconPlus from "@/components/icons/IconPlus";
import Image from "next/image";
import Link from "next/link";
import ProjectFilter from "./ProjectFilter";
import type { ProjectFilterType } from "@/types";
import { projects } from "@/utils/projects";
import Footer from "./Footer";

export default function Home() {
  const [filter, setFilter] = useState<ProjectFilterType>("all");

  return (
    <div className="container mx-auto pt-32 md:pt-52 3xl:max-w-screen-2xl 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md sm:max-w-screen-sm max-w-xs">
      <div className="font-extrabold text-5xl md:text-7xl lg:text-8xl -mb-1">
        <div className="flex flex-end">
          <span>Crafting fresh</span>
          <Blinks />
        </div>{" "}
        experiences for people.
      </div>
      <Scribble />
      <div className="font-source text-xl pt-4 mb-20 lg:mb-28">
        <b>Laura</b> — Product Designer.<br></br> Currently freelancing.
        Previously{" "}
        <a className="underline hover:text-accent" href="https://gumroad.com">
          @Gumroad.
        </a>
      </div>
      <ProjectFilter filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-16 gap-y-24 pt-8">
        {projects
          .filter((project) => filter === "all" || project.tag.includes(filter))
          .map((project) => {
            return <ProjectCover key={project.name} {...project} />;
          })}
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
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center md:hover:bg-[#f6f6f8]">
                <IconPlus className="mx-auto mb-2 text-black dark:text-white" />
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
      <Footer />
    </div>
  );
}
