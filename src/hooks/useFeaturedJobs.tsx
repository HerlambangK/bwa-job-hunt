"use client";
import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useFeaturedJobs = () => {
  const { data, isLoading, error } = useSWR("/api/jobs/featured", fetcher);
  // console.log("data", data);

  const [jobs, setJobs] = useState<JobType[]>([]);
  const parseJob = useCallback(async () => {
    const parseData = await parsingJobs(data, isLoading, error);
    setJobs(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJob();
  }, [data, isLoading, error]);

  return {
    jobs,
    isLoading,
    error,
  };
};

export default useFeaturedJobs;
