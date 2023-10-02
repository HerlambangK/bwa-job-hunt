import Hero from "@/components/orgamisms/Hero";
import Client from "@/components/orgamisms/Clients";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Category from "@/components/orgamisms/Category";
import BannerSignUp from "@/components/orgamisms/BannerSignUp";
import FeaturedJob from "@/components/orgamisms/FeaturedJob";
import LatestJob from "@/components/orgamisms/LatestJobs";

export default function Home() {
  return (
    <div className="px-32">
      <Hero />
      <Client />
      <Category />
      <BannerSignUp />
      <FeaturedJob />
      <LatestJob />
    </div>
  );
}
