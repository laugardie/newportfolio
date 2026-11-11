import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Hidden for now: the page and its assets stay in the repo, but /resend answers 404.
const HIDDEN = true;

export const metadata: Metadata = {
  title: "Laura García Diéguez — Resend",
  description: "Portfolio review for the Resend design team.",
  robots: { index: false, follow: false },
};

export default function ResendLayout({ children }: { children: React.ReactNode }) {
  if (HIDDEN) notFound();
  return children;
}
