// import Navbar from "@/components/layouts/Navbar";
// import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import Image from "next/image";
// import { Toaster } from "@/components/ui/toaster";
// import AuthProvider from "@/providers/AuthProvoder";
import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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
  //   const { data: session } = useSession();
  // const router = useRouter();
  //     // Lakukan redirect berdasarkan isAdmin di session
  //   if (session?.user.isAdmin) {
  //     router.push('/admin');
  //   } else {
  //     router.push('/');
  //   }
  // }, [session, router]);
  return (
    <html lang="en">
      <body className={`${epilogue.className} relative overflow-x-hidden`}>
        {/* <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider> */}
        <h1>Admin Area</h1>
      </body>
    </html>
  );
}
