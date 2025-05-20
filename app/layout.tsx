import type { Metadata } from "next";
import localFont from "next/font/local";
import { Italiana, Outfit } from "next/font/google";
import "./globals.css";

const sallim = localFont({
  src: "./fonts/Sallim.ttf",
  variable: "--font-sallim",
  weight: "100 200 300 400 500 600 700 800 900",
});
const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
  display: "swap"
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["200","300","400","500","600","700","800","900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Deili Invitation",
  description: "crafting memories, design your dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sallim.variable} ${outfit.variable} ${italiana.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
