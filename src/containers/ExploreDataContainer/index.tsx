import CompanyCard from "@/components/orgamisms/CompanyCard";
import FormFilterDynamic from "@/components/orgamisms/FormFilterDynamic";
import FormSearchDynamic from "@/components/orgamisms/FormSearchDynamic";
import JobCard from "@/components/orgamisms/JobCard";
import { FilterFormType, JobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: FilterFormType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: any[];
  type: `job` | `company`;
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  formFilter,
  filterForms,
  onSubmitFilter,
  loading,
  subtitle,
  title,
  data,
  type,
}) => {
  return (
    <>
      <div className="bg-slate-100 md:px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-11 text-center flex justify-center gap-2">
            <span className="text-5xl font-semibold">Find Your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text text-primary">
                {title}
              </span>
              <div className="absolute top-10 w-[120px] h-10">
                <Image
                  src={"/images/pattern2.png"}
                  alt="/images/pattern2.png"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">{subtitle}</div>
        </div>
        <div>
          <FormSearchDynamic />
        </div>
      </div>
      <div className="mt-20 mb-16 px-32 flex flex-row items-start gap-10">
        <div className="w-1/5">
          <FormFilterDynamic
            formFilter={formFilter}
            filterForms={filterForms}
            onSubmitFilter={onSubmitFilter}
          />
        </div>
        <div className="w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">
              All {type === "job" ? "Jobs" : "Companies"}
            </div>
            <div className="text-muted-foreground mb-8">
              Showing {data?.length} Result
            </div>
            <div className="">
              {loading ? (
                <div className="flex justify-center"> Loading...</div>
              ) : (
                <>
                  {type === `job` ? (
                    <div className="grid grid-cols-1 gap-7">
                      {data?.map((item: any, i: number) => (
                        <JobCard key={i} {...item} />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {data?.map((item: any, i: number) => (
                        <CompanyCard key={i} {...item} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
