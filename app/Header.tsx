import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed flex w-full justify-between items-center bg-white dark:bg-[#101010] p-4 lg:py-0 lg:px-24 z-10">
      <Link className="cursor-pointer" href="/">
        <Logo />
      </Link>
      <MenuDesktop className="hidden lg:flex" />
      <MenuPhone className="lg:hidden" />
    </header>
  );
}
