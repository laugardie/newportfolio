"use client";

import Link from "next/link";
import IconArrow from "./icons/IconArrow";
import { usePathname } from "next/navigation";

type MenuDesktopProps = { className?: string };

const MenuDesktop = ({ className }: MenuDesktopProps) => {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate first
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the section label element (the first label within the section)
      const sectionLabel = element.querySelector('label');
      const labelHeight = sectionLabel ? sectionLabel.offsetHeight : 0;
      
      // Calculate position to ensure section title is visible
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Add some padding to ensure the label is clearly visible
      const paddingTop = 100; // Adjust this value as needed
      
      window.scrollTo({
        top: absoluteElementTop - paddingTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className={`flex justify-between items-center font-figtree font-base text-base w-full B ${
        className ?? ""
      }`}
    >
      <nav className="flex items-center">
        <button
          onClick={() => scrollToSection('experience')}
          className="px-4 sm:px-6 py-4 border-r border-l border-border transition-all text-black hover:bg-white/70 hover:text-black"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection('workplay')}
          className="px-4 sm:px-6 py-4 border-r border-border transition-all text-black hover:bg-white/70 hover:text-black"
        >
          Workplay
        </button>
        <button
          onClick={() => scrollToSection('toolkit')}
          className="px-4 sm:px-6 py-4 border-r border-border transition-all text-black hover:bg-white/70 hover:text-black"
        >
          Toolkit
        </button>
      </nav>
      <div className="flex items-center">
        <Link
          className={`border-l border-r border-border px-4 sm:px-6 py-4 transition-all ${
            pathname === "/download-cv"
              ? "text-white bg-black"
              : "text-black hover:bg-white/70 hover:text-black"
          }`}
          href="/download-cv"
        >
          Download CV
        </Link>
        <Link
          className="font-base font-regular flex items-center h-full px-4 md:px-6 py-4 bg-black text-white hover:bg-accent transition-all"
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
