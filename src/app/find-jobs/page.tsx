"use client";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

type Props = {};

const FILTER_FORMS: FilterFormType[] = [
  {
    name: "categories",
    label: "Category",
    items: CATEGORIES_OPTIONS,
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
    />
  );
};

export default FindJobsPage;
