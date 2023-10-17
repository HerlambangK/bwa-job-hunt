import { z } from "zod";
export const formFilterSchema = z.object({
  categories: z.array(z.string()),
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

export const formSignInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password minimal 6 characters" }),
});

export const formSignUpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password minimal 6 characters" }),
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name minimal 3 characters" }),
});
