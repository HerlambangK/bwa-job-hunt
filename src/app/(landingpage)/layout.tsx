import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
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
      <body
        className={`${epilogue.className} mt-29 md:relative md:overflow-x-hidden`}
      >
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
