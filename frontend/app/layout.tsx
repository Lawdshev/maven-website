import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactQueryProvider } from "./providers";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ClientWrapper from "./ClientWrapper";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "mavencode",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <ReactQueryProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
