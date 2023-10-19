import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { FilterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryCompanyFilter = () => {
  const { data, error, isLoading } = useSWR("/api/company/categories", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error, true),
    [data, error, isLoading]
  );

  const filters = useMemo(() => {
    return [
      {
        name: "industry",
        label: "Industry",
        items: categories,
      },
    ] as FilterFormType[];
  }, [categories]);

  return {
    filters,
  };
};

export default useCategoryCompanyFilter;
