"use client";
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useCategoryCompanyFilter from "@/hooks/useCategoryCompanyFilter";
import useCompanies from "@/hooks/useCompanies";
import { formFIlterCompanySchema } from "@/lib/form-schema";
import { CompanyType, FilterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface FindCompanyPageProps {}

const FILTER_FORMS: FilterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dataDummy: CompanyType[] = [
  {
    image: "/images/company2.png",
    totalJobs: 100,
    categories: "Backend",
    description: "Deskription",
    name: "Backend Developer",
  },
  {
    image: "/images/company2.png",
    totalJobs: 100,
    categories: "Backend",
    description: "Deskription",
    name: "Backend Developer",
  },
  {
    image: "/images/company2.png",
    totalJobs: 100,
    categories: "Backend",
    description: "Deskription",
    name: "Backend Developer",
  },
  {
    image: "/images/company2.png",
    totalJobs: 100,
    categories: "Backend",
    description: "Deskription",
    name: "Backend Developer",
  },
];

const FindCompanyPage: FC<FindCompanyPageProps> = ({}) => {
  const formFilter = useForm<z.infer<typeof formFIlterCompanySchema>>({
    resolver: zodResolver(formFIlterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });
  const [categories, setCategories] = useState<string[]>([]);
  const { filters } = useCategoryCompanyFilter();

  const { companies, isLoading, mutate } = useCompanies(categories);

  const onsubmit = async (val: z.infer<typeof formFIlterCompanySchema>) => {
    setCategories(val.industry);
  };

  useEffect(() => {
    mutate();
  }, [categories]);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onsubmit}
      filterForms={filters}
      title="Dream Job"
      subtitle=" Find your next career at companies like HubSpot, Nike, and Dropbox"
      loading={isLoading}
      type="company"
      data={companies}
    />
  );
};

export default FindCompanyPage;
