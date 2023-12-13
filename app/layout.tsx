import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayden Jahola | Personal Blogs",
  description:
    "I am a full time student at DCU, I am a self-taught developer with a passion for learning and creating. this website is my personal blogs and will be the home of my future projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={` ${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`}
      >
        <Providers>
          <Navbar />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <Analytics />
          </main>
        </Providers>
      </body>
    </html>
  );
}
