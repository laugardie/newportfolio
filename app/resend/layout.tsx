import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura García Diéguez — Resend",
  description: "Portfolio review for the Resend design team.",
  robots: { index: false, follow: false },
};

export default function ResendLayout({ children }: { children: React.ReactNode }) {
  return children;
}
