"use client";
import TitleSection from "@/components/atoms/TitleSection";
import Image from "next/image";
import React, { FC, useMemo } from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { fetcher, parsingCategories } from "@/lib/utils";
import { categoryJobType } from "@/types";

interface CategoryProps {
  // Props dinamis Anda
}

const Category: FC<CategoryProps> = ({}) => {
  const { data, isLoading, error } = useSWR("/api/jobs/categories", fetcher);

  // console.log(data, isLoading, error);

  const categories = useMemo(() => parsingCategories(data, isLoading, error), [
    data,
    isLoading,
    error,
  ]);

  // console.log("categories", categories);
  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: categoryJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
