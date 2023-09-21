"use client";

import { useState } from "react";
import IconBurger from "./icons/IconBurger";
import IconClose from "./icons/IconClose";
import Link from "next/link";
import IconArrow from "./icons/IconArrow";

const MenuPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden text-black dark:text-white h-full w-full absolute">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer p-4 fixed right-0 top-0 z-10"
      >
        {isOpen ? <IconClose /> : <IconBurger />}
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="bg-white dark:bg-[#101010] fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
        >
          <Link className="text-2xl h-20" href="/">
            Projects
          </Link>
          <Link className="text-2xl h-20" href="/about">
            About
          </Link>
          <Link className="text-2xl h-20" href="/resume">
            Resume
          </Link>
          <Link
            className="text-2xl h-16 flex items-center px-16 bg-accent text-white"
            href="mailto:laugardie89@gmail.com"
            target="_blank"
          >
            Let&apos;s talk
            <IconArrow />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuPhone;
