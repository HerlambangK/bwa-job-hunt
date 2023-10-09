import { z } from "zod";
export const formFilterSchema = z.object({
  categories: z.array(z.string()).min(1),
});

export const formFIlterCompanySchema = z.object({
  industry: z.array(z.string()),
});

export const fontApplySchema = z.object({
  resume: z.any().refine((file: any) => file?.name, "Please upload resume"),
  fullname: z
    .string({ required_error: "Fullname is required" })
    .min(5, { message: "Fullname minimal 5 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  phone: z.string().min(6, { message: "Phone minimal 6 characters" }),
  previousJobTitle: z.string(),
  LinkedIn: z.string(),
  portofolio: z.string(),
  coverLetter: z.string(),
});
