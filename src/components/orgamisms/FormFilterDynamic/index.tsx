import React, { FC } from "react";
import { Form, FormDescription, FormLabel } from "@/components/ui/form";
import CheckboxForms from "./CheckboxForms";
import { FilterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: FilterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  filterForms,
  formFilter,
  onSubmitFilter,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        <div className="mb-4">
          <FormLabel className="text-base">Category Filter</FormLabel>
          <FormDescription>Pick the category filter</FormDescription>
        </div>
        {filterForms.map((item: FilterFormType, i: number) => (
          <CheckboxForms
            key={i}
            formFilter={formFilter}
            items={item.items}
            label={item.label}
            name={item.name}
          />
        ))}
        <Button className="mt-3 w-full">Apply Filter</Button>
        <Button variant={"outline"} className="mt-5 w-full">
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
