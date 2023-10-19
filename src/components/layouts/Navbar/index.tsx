"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import BurgerMenu from "../BurgerMenu";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import MenuAuth from "@/components/orgamisms/MenuAuth";

interface NavbarProps {
  // Props dinamis Anda
}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between lg:px-12">
      <div className="inline-flex items-center gap-12">
        <Link href={"/"}>
          <Image
            src={"/images/logo2.png"}
            alt="logo2"
            width={160}
            height={100}
          />
        </Link>

        <div className="hidden  items-center gap-4 md:inline-flex">
          <Link
            href={"/find-jobs"}
            className="font-medium text-gray-400 mr-4 cursor-pointer "
          >
            Find Jobs
          </Link>
          <Link
            href={"/find-company"}
            className="font-medium text-gray-400 cursor-pointer "
          >
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="hidden md:inline-flex items-center gap-4 h-8">
        {session ? (
          <MenuAuth />
        ) : (
          <>
            <Button onClick={() => router.push("/signin")} variant="link">
              Login
            </Button>
            <Button onClick={() => router.push("/signup")}>Sign Up</Button>
          </>
        )}
      </div>
      <div className="flex md:hidden">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
