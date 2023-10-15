"use client";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilterFormType, JobType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

type Props = {};

const FILTER_FORMS: FilterFormType[] = [
  {
    name: "categories",
    label: "Category",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: JobType[] = [
  {
    applicants: 1,
    image: "/images/company2.png",
    jobType: "Full Time",
    location: "Jakarta Selatan",
    name: "Full Stack",
    type: "Agency",
    needs: 10,
    categories: ["Frontend", "Backend"],
    description: "lorem",
  },
  {
    applicants: 1,
    image: "/images/company2.png",
    jobType: "Full Time",
    location: "Jakarta Selatan",
    name: "Full Stack",
    type: "Agency",
    needs: 10,
    categories: ["Frontend", "Backend"],
    description: "lorem",
  },
];

const FindJobsPage = (props: Props) => {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) =>
    console.log(val);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="Dream Job"
      subtitle=" Find your next career at companies like HubSpot, Nike, and Dropbox"
      loading={false}
      type="job"
      data={dummyData}
    />
  );
};

export default FindJobsPage;
