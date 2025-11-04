import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitron AI - Get Jacked",
  description: "A modern fitness AI platform to get jacked for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html    className="_SD_ACTIVE_ _SD_LOADED_" lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />

          {/* GRID BACKGROUND */}
          <div className="fixed inset-0 -z-10">
  {/* Dark red-toned background gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#280000] via-[#0d0000] to-black"></div>

  {/* Subtle red grid lines over dark background */}
  <div className="absolute inset-0 bg-[linear-gradient(#660000_1px,transparent_1px),linear-gradient(90deg,#660000_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
</div>


          <main className="pt-24 flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
