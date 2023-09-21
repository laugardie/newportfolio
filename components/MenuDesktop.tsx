import Link from "next/link";
import Logo from "./Logo";
import IconArrow from "./icons/IconArrow";

type MenuDesktopProps = { className?: string };

const MenuDesktop = ({ className }: MenuDesktopProps) => (
  <div
    className={`h-14 flex ml-auto items-center font-source font-semibold text-xl gap-8 ${
      className ?? ""
    }`}
  >
    <Link className="hover:text-accent" href="/">
      Projects
    </Link>
    <Link className="hover:text-accent" href="/about">
      About
    </Link>
    <Link className="hover:text-accent" href="/resume">
      Resume
    </Link>
    <Link
      className="flex items-center h-full px-6 ml-6 bg-accent text-white hover:bg-black hover:text-white"
      href="mailto:laugardie89@gmail.com"
      target="_blank"
    >
      Let&apos;s talk
      <IconArrow />
    </Link>
  </div>
);

export default MenuDesktop;
