import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobProps {}

const FeaturedJob: FC<FeaturedJobProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12 ">
        {[0, 1, 2, 3, 4].map((item: number) => (
          <JobItem
            key={item}
            name="Frontend Developer"
            image="/images/company.png"
            jobType="Full Time"
            type="Agency"
            location="Jakarta Selatan"
            description="ote that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url."
            categories={["Frontend", "Backend", "Full Stack"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
