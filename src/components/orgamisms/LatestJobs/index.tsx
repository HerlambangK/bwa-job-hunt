import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface LatestJobProps {}

const LatestJob: FC<LatestJobProps> = ({}) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {[0, 1, 2, 3, 4].map((item: number) => (
          <JobItem
            key={item}
            name="Backend Developer"
            image="/images/company2.png"
            type="Agency"
            location="Jakarta Selatan"
            jobType="Full Time"
            description="Deskription"
            categories={["Frontend", "Backend"]}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
