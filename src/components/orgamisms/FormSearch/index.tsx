import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FormSearchProps {
  // Props dinamis Anda
}

const FormSearch: FC<FormSearchProps> = ({}) => {
  return (
    <>
      <div className="mt-12 md:mt-6 p-4 bg-background shadow-md  md:inline-flex items-center gap-4 md:relative w-max  ">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="md:py-8 md:w-[300px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="mt-4 inline-flex gap-3 items-center">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <Select>
            <SelectTrigger className="px-12 md:py-8 md:w-[300px] text-gray-500 border-none outline-none ">
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Indonesia">Indonesia</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="py-8 px-10 text-lg">Search My Job</Button>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
