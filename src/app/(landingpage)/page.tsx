"use client";
import Hero from "@/components/orgamisms/Hero";
import Client from "@/components/orgamisms/Clients";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Category from "@/components/orgamisms/Category";
import BannerSignUp from "@/components/orgamisms/BannerSignUp";
import FeaturedJob from "@/components/orgamisms/FeaturedJob";
import LatestJob from "@/components/orgamisms/LatestJobs";
import ImageSlider from "@/components/orgamisms/Slider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();
  console.log("data", session);

  // useEffect(() => {
  //   // Gunakan useEffect untuk melakukan navigasi berdasarkan isAdmin
  //   if (isAdmin) {
  //     router.push("/admin");
  //   } else {
  //     router.push("/");
  //   }
  // }, [isAdmin, router]);
  return (
    <>
      <div className=" container md:absolute md:w-2/3 md:h-screen md:top-0 md:right-0 md:-z-10">
        <Image src="/images/pattern.png" alt="pattern" fill />
      </div>
      <div className="px-4 md:px-32 mt-15">
        <div className="p-2 mt-20 ">
          <ImageSlider
            urls={[
              "/images/hero.png",
              "/images/hero.png",
              "/images/hero.png",
              "/images/hero.png",
            ]}
          />
        </div>
        <Hero />
        <Client />
        {/* <Category /> */}
        <BannerSignUp />
        {/* <FeaturedJob /> */}
        {/* <LatestJob /> */}
      </div>
    </>
  );
}
