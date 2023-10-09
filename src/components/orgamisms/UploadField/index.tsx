import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import React, { FC, useRef } from "react";

interface UploadFieldProps {
  form: any;
}

const UploadField: FC<UploadFieldProps> = ({ form }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, SetNameFile] = React.useState<string>("Attach Resume / CV");

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      SetNameFile(e.target.files[0].name);
      form.setValue("resume", e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="font-semibold">attach your resume</div>
      <div className="">
        <div className="">
          <div
            onClick={handleSelectFile}
            className="text-xs text-primary font-semibold text-center p-3 w-max cursor-pointer border-2 border-dashed border-primary"
          >
            {nameFile}
          </div>
        </div>
        <FormField
          name="resume"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <input
          type="file"
          className="hidden"
          accept="application/pdf"
          ref={inputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UploadField;
