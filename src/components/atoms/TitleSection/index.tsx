import React, { FC } from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

interface TitleSectionProps {
  word1: string;
  word2: string;
}

const TitleSection: FC<TitleSectionProps> = ({ word1, word2 }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-4xl font-semibold">
        {word1} <span className="text-primary">{word2}</span>
      </div>
      <div className="inline-flex gap-3 items-center text-primary font-semibild cursor-pointer">
        <span>Show all jobs</span>
        <HiOutlineArrowCircleRight />
      </div>
    </div>
  );
};
export default TitleSection;
