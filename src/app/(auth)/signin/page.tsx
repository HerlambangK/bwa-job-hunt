"use client";
import { Button } from "@/components/ui/button";
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
import { formSignInSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { signIn } from "next-auth/react";
import { toast, useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSignInSchema>>({
    resolver: zodResolver(formSignInSchema),
  });

  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (val: z.infer<typeof formSignInSchema>) => {
    // console.log(val);
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });

    // console.log(authenticated);
    if (authenticated?.error) {
      toast({
        title: "Sign In Failed",
        description: "Email or Password is incorrect",
      });
      return;
    }

    router.push("/");
  };
  return (
    <>
      <div className="text-xl md:text-3xl font-semibold text-center mb-7">
        Welcome Create your account
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <div className="text-gray-500 text-sm mt-6">
            Don`t have an account{" "}
            <Link href={"/signup"} className="text-primary font-medium">
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignInPage;
