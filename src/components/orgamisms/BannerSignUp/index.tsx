import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";

interface BennerSignUpProps {}

const BannerSignUp: FC<BennerSignUpProps> = ({}) => {
  return (
    <div className="p-20 my-32 rounded-xl shadow-sm  md:mt-32 mb-10 bg-primary text-primary-foreground px-2 md:px-16 pt-16 flex md:flex-row  flex-col-reverse justify-between items-start">
      <div>
        <div className="text-xl md:text-5xl mb font-semibold">
          Start posting <br /> Job today.
        </div>
        <div className="md:my-6">Start posting job for only $10</div>
        <Button
          size={"lg"}
          variant={"secondary"}
          className="hover:text-primary text-primary"
        >
          Sign Up for Free
        </Button>
      </div>
      <Image
        src="/images/dashboard.png"
        alt="/images/dashboard.png"
        width={500}
        height={300}
        className="mb-10 md:mb-0 rounded"
      />
    </div>
  );
};

export default BannerSignUp;
