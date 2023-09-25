"use client";

import { useState } from "react";
import IconBurger from "./icons/IconBurger";
import IconClose from "./icons/IconClose";
import Link from "next/link";
import IconArrow from "./icons/IconArrow";
import { usePathname } from "next/navigation";

type MenuPhoneProps = { className?: string };

const MenuPhone = ({ className }: MenuPhoneProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className={`text-black dark:text-white ${className ?? ""}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer z-20 relative self-center"
      >
        {isOpen ? <IconClose /> : <IconBurger />}
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="bg-white dark:bg-[#101010] font-source font-semibold fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-10"
        >
          <Link
            className={`text-2xl h-20 ${
              pathname === "/"
                ? "text-accent"
                : "text-[#101010] dark:text-white"
            }`}
            href="/"
          >
            Projects
          </Link>
          <Link
            className={`text-2xl h-20 ${
              pathname === "/about"
                ? "text-accent"
                : "text-[#101010] dark:text-white"
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`text-2xl h-20 ${
              pathname === "/resume"
                ? "text-accent"
                : "text-[#101010] dark:text-white"
            }`}
            href="/resume"
          >
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
