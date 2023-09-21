import IconArrow from "@/components/icons/IconArrow";
import Logo from "@/components/Logo";
import MenuPhone from "@/components/MenuPhone";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-14 pl-4 lg:px-24 w-full flex justify-between items-center font-source font-semibold text-lg md:text-xl fixed z-10 bg-white dark:bg-[#101010]">
      <Link href="/">
        <Logo />
      </Link>
      <div className="hidden lg:flex items-center h-full">
        <Link className="px-3 md:px-6 hover:text-accent" href="/">
          Projects
        </Link>
        <Link className="px-3 md:px-6 hover:text-accent" href="/about">
          About
        </Link>
        <Link className="px-3 md:px-6 hover:text-accent" href="/resume">
          Resume
        </Link>
        <Link
          className="flex items-center h-full px-6 ml-2 md:ml-6 bg-accent text-white hover:bg-black hover:text-white"
          href="mailto:laugardie89@gmail.com"
          target="_blank"
        >
          Let&apos;s talk
          <IconArrow />
        </Link>
      </div>
      <MenuPhone />
    </header>
  );
}
