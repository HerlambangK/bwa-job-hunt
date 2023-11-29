import Navbar from "@/components/layouts/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BKN Portal",
  description: "Selamat Datang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} md:relative overflow-x-hidden `}>
        <main className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative md:h-screen w-full h-[40vh]">
            <div className="absolute w-full md:h-full h-[40vh] md:blur-0 blur-sm">
              <Image
                src={"/images/bg-auth.png"}
                alt="/images/bg-auth.png"
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute md:top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
              {children}
            </div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
