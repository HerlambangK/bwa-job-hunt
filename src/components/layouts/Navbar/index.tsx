"use client";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ButtonSession from "../ButtonSession";
import BurgerMenu from "../BurgerMenu";
// import { BurgerMenu } from "./burgermenu";
// import ButtonSession from "./button-session";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if (pathName === "/login") {
  if (pathName === "/signin") {
    return null;
  }

  return (
    <SessionProvider>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-10 flex justify-between bg-white p-4 transition lg:px-12",
          isScrolled ? "shadow-sm bg-white" : ""
        )}
      >
        <Link href="/" className="inline-flex">
          <Image
            alt="/public/images/logo.png"
            src={"/images/logo.png"}
            width={175}
            height={100}
            className="w-24 object-contain lg:w-32 xl:w-40"
          />
        </Link>

        <div className="hidden bg-white items-center gap-4 md:inline-flex">
          {/* <Link
            disable
            href="/about"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-semibold hover:bg-zinc-100 disabled:cursor-not-allowed ",
              pathName === "/about" && "bg-zinc-100"
            )}
          >
            About
          </Link> */}
          <Link
            href="/find-company"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-semibold hover:bg-zinc-100",
              pathName === "/find-company" && "bg-zinc-100"
            )}
          >
            Publikasi
          </Link>
          <Link
            href="/find-jobs"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-semibold hover:bg-zinc-100",
              pathName === "/find-jobs" && "bg-zinc-100"
            )}
          >
            Cari kerja
          </Link>
          <ButtonSession />
        </div>
        <div className="flex md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </SessionProvider>
  );
};

export default Navbar;
