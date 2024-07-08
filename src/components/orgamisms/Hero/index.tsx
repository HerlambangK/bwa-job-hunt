import Image from "next/image";
import React, { FC } from "react";
import FormSearch from "../FormSearch";

interface HeroProps {
  // Props dinamis Anda
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="container flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2">
        <div className="hidden text-4xl mt-5 md:text-7xl font-semibold text-slate-600 w-max relative">
          Discover <br />
          More than <br /> <span className="text-primary">5000+ Jobs</span>
        </div>
        <div className="text-4xl mt-5 md:text-7xl font-bold text-slate-600 w-full relative">
          Discover More than <br />{" "}
          <span className="text-primary">5000+ Jobs</span>
        </div>
        <Image
          src={"/images/pattern2.png"}
          alt="parttern 2"
          width={455}
          height={32}
          className="mb-5"
        />
        <div className="text-muted-foreground text-lg">
          Great platform for the job seeker that searching for <br />
          new career heights and passionate about startups.
        </div>
        <FormSearch />
      </div>
      <div className="block mt-2 ">
        <Image
          src={"/images/hero.png"}
          alt="hero"
          width={500}
          height={100}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
