import Image from "next/image";
import React, { FC } from "react";

interface ClintsProps {
  // Props dinamis Anda
}

const clients = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

const Clints: FC<ClintsProps> = ({}) => {
  return (
    <div className="relative ">
      <div className="text-lg text-muted-foreground">
        Company we helped grow
      </div>
      <div className="mt-8 md:flex md:flex-row grid grid-cols-2 gap-8 justify-between">
        {clients.map((item: string, i: number) => (
          <Image src={item} key={i} alt={item} width={139} height={35} />
        ))}
      </div>
    </div>
  );
};

export default Clints;
