import { Navbar, Providers } from "@components";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";

const roboto = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BB Simon | Portfolio 🚀",
  description:
    "Badare Basem Simon - Software developer with a background in building effective software solutions. 6+ years of industry experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline. Grew up in a remote and collaborative environment. Strong skills in JavaScript, Typescript, React, Node, and Ruby on Rails. Passionate about learning cloud computing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-[#e5e5e5] dark:bg-blackmain1 antialiased">
        <Providers>
          {children}
          <Navbar />
          {/* <Footer /> */}
        </Providers>
      </body>
      {/* Allow for more hieght on mobile divices */}
      {/* <div className='h-40 md:hidden' /> */}
    </html>
  );
}
