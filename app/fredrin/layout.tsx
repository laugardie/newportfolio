import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura García Diéguez — Fredrin",
  description: "About me, for the Fredrin application.",
  robots: { index: false, follow: false },
};

export default function FredrinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
