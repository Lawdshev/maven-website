import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "mavencode",
  description: "",
  generator: "",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
     className={spaceGrotesk.className}
    >
      <body >
        <Header>
          {children}
          <Footer />
        </Header>
      </body>
    </html>
  );
}
