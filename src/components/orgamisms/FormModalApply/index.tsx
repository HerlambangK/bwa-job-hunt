"use client";
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { formApplySchema } from "@/lib/form-schema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadField from "../UploadField";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { supabaseUploadFile } from "@/lib/supabase";

interface FormModalApplyProps {
  image: string | undefined;
  roles: string | undefined;
  location: string | undefined;
  jobType: string | undefined;
  id: string | undefined;
  isApply: number | undefined;
}

const FormModalApply: FC<FormModalApplyProps> = ({
  image,
  jobType,
  location,
  roles,
  id,
  isApply,
}) => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const { data: session } = useSession();

  const onSubmit = async (val: z.infer<typeof formApplySchema>) => {
    console.log(val);
    try {
      const { filename, error } = await supabaseUploadFile(
        val.resume,
        "applicant"
      );

      const reqData = {
        userId: session?.user.id,
        jobId: id,
        resume: filename,
        coverLetter: val.coverLetter,
        linkedIn: val.LinkedIn,
        phone: val.phone,
        portfolio: val.LinkedIn,
        previousJobTitle: val.previousJobTitle,
      };

      if (error) {
        throw "Error";
      }

      await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });

      await toast({
        title: "Success",
        description: "Apply job success",
      });

      router.replace("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Please try again",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="text-lg p-12 py-6">
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div>
          <div className="inlane-flex items-center gap-4">
            <div>
              <Image src={image!!} alt={image!!} width={60} height={60} />
              <div className="text-lg font-semibold">{roles}</div>
              <div className="text-gray-500">
                {" "}
                {location} - {jobType}
              </div>
            </div>
          </div>
          <Separator className="my-5" />
          <div className="mb-5">
            <div className="font-semibold">Submit your application</div>
            <div className="text-gray-500 text-sm mt-2">
              The following is required and will only be shared with us.
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Fullname" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previousJobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current of previous job title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's your current of previous job title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <h2 className="font-semibold">LINKS</h2>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="LinkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Linkedin URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Linkedin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portofolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portofolio URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Portofolio" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CoverLetter URL</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add a cover letter or anythink else you want to share"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <UploadField form={form} />
              <Button className="w-full">Apply</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApply;
