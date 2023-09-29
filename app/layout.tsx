import Header from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "laugardie",
  description: "Laura García Diéguez's portfolio - Product Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:wght@400;600&family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="mx-auto box-border">{children}</div>
      </body>
    </html>
  );
}
