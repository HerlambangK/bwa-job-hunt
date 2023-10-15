import Navbar from "@/components/layouts/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvoder";

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
        <AuthProvider>
          <Navbar />
          <main>
            {/* <div className="w-full h-screen absolute top-0 -z-10" /> */}
          </main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
