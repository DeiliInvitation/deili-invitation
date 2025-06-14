import type { Metadata } from "next";
import localFont from "next/font/local";
import { Italiana, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import Image from "next/image";

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
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancingScript",
  weight: ["400","500","600","700"],
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
    <html lang="en" className="bg-gradient-to-b from-lightPink to-pinky">
      <body className={`${sallim.variable} ${dancingScript.variable} ${outfit.variable} ${italiana.variable} ${outfit.className} antialiased pt-5 my-5 md:my-10 mx-5 md:mx-10 xl:mx-20 bg-white rounded-xl shadow-softShadow`}>
        <div className="hidden md:block mx-5 md:mx-10 xl:mx-20 relative">
          <Header />
        </div>
        <div className="mx-5 relative">
          <div className="flex items-center gap-2 rounded-2xl p-2 border shadow-softShadow md:hidden">
             <Image src={`/image.png`} alt="image" className="rounded-full bg-lightGray" width={45} height={45} />
             <h3 className="font-sallim text-2xl">Deili Invitation</h3>
          </div>
          <ResponsiveHeader />
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
