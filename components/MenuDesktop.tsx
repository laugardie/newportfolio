"use client";

import Link from "next/link";
import IconArrow from "./icons/IconArrow";
import { usePathname } from "next/navigation";

type MenuDesktopProps = { className?: string };

const MenuDesktop = ({ className }: MenuDesktopProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex justify-between items-center font-figtree font-base text-base w-full B ${
        className ?? ""
      }`}
    >
      <nav className="flex items-center">
        <Link
          className="px-6 py-4 border-r border-l border-border transition-all text-black hover:bg-white/70 hover:text-black"
          href="/"
        >
          Experience
        </Link>
        <Link
          className="px-6 py-4 border-r border-border transition-all text-black hover:bg-white/70 hover:text-black"
          href="/workplay"
        >
          Workplay
        </Link>
        <Link
          className="px-6 py-4 border-r border-border transition-all text-black hover:bg-white/70 hover:text-black"
          href="/toolkit"
        >
          Toolkit
        </Link>
      </nav>
      <div className="flex items-center">
        <Link
          className={`border-l border-r border-border px-6 py-4 transition-all ${
            pathname === "/download-cv"
              ? "text-white bg-black"
              : "text-black hover:bg-white/70 hover:text-black"
          }`}
          href="/download-cv"
        >
          Download CV
        </Link>
        <Link
          className="font-base font-regular flex items-center h-full px-6 py-4 bg-black text-white hover:bg-accent transition-all"
          href="mailto:laugardie89@gmail.com"
          target="_blank"
        >
          Let&apos;s talk
          <IconArrow />
        </Link>
      </div>
    </div>
  );
};

export default MenuDesktop;
