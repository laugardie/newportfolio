import SectionSm from "./design system/SectionSm";
import Link from "next/link";

type NextBackProps = {
  next: {
    href: string;
    text: string;
  };
  prev: {
    href: string;
    text: string;
  };
};

export default function NextBack({ next, prev }: NextBackProps) {
  return (
    <div className="w-full border-t border-b border-border">
      <div className="container mx-auto max-w-screen-xl">
        <div className="border-x border-border grid grid-cols-2">
          <Link 
            href={prev.href}
            className="px-6 py-4 border-r border-border hover:bg-white/70 hover:text-black transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {prev.text}
          </Link>
          <Link 
            href={next.href}
            className="px-6 py-4 hover:bg-white/70 hover:text-black transition-colors flex items-center justify-end gap-2"
          >
            {next.text}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
