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
  title: "PRZEPROWADZKI TANIO BIAŁYSTOK | SZYBKO, PEWNIE, TANIO",
  description: "Transport do 1.5 t dostępny od ręki! 7 dni w tygodniu. Meble, AGD/RTV, materiały budowlane. Przeprowadzki domów, biur, taxi bagażowe. Zadzwoń: 660 000 055",
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