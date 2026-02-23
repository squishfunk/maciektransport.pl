import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-anton",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "USŁUGI BUSEM 24/7 PODLASKIE | PRZEPROWADZKI, TRANSPORT, SPRZĄTANIE",
  description: "Usługi busem 24/7 — od wszystkiego! Przeprowadzki, transport mebli i AGD, opróżnianie piwnic, sprzątanie, wywóz rzeczy, gruz. Całe Podlaskie. Zadzwoń: 502 558 034",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${anton.variable} ${spaceGrotesk.variable} antialiased bg-dark text-light font-sans selection:bg-brand selection:text-dark min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}