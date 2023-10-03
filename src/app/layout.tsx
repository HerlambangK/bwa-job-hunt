import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOB HUNT",
  description: "Cari job mu Disini",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} relative overflow-x-hidden`}>
        <Navbar />
        <main>
          {/* <div className="w-full h-screen absolute top-0 -z-10" /> */}

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
