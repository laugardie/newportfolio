"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-dm-sans text-sm text-ink/70 hover:text-ink transition-colors"
      >
        laura garcía diéguez
      </Link>

      <div className="flex items-center gap-7 font-dm-sans text-sm text-ink/50">
        <Link
          href="/#work"
          className={`hover:text-ink transition-colors ${pathname === "/" ? "text-ink/70" : ""}`}
        >
          work
        </Link>
        <Link
          href="/about"
          className={`hover:text-ink transition-colors ${pathname === "/about" ? "text-ink" : ""}`}
        >
          about
        </Link>
        <a
          href="mailto:hello@lauragarcia.design"
          className="hover:text-ink transition-colors"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
