import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FooterProps {}

const aboutLinks = [
  "Companies",
  "Pricing",
  "Advice",
  "Terms",
  "Privacy Policy",
];

const respurceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

const sosialMediaImg = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-slate-900 px-32  pt-16 pb-11">
      <div className="flex flex-row  items-start justify-between">
        <div>
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={160}
            height={36}
          />
          <div className="text-muted mt-8">
            Great platform for the job seeker that <br />
            passionate about startups. Find your dream job <br />
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </div>
          <div className="space-y-4">
            {aboutLinks.map((item: string, i: number) => (
              <Link className="block text-muted " key={i} href={"/"}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Resource
          </div>
          <div className="space-y-4">
            {respurceLinks.map((item: string, i: number) => (
              <Link className="block text-muted " key={i} href={"/"}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Get job notifications
          </div>
          <div className="text-muted">
            The latest job news, articles, sent to <br /> your inbox weekly
          </div>
          <div className="mt-10 inline-flex items-center gap-3">
            <Input placeholder="Email Address" className="py-5" />
            <Button className="py-5">Subsribe</Button>
          </div>
        </div>
      </div>
      <Separator className="mt-20 mb-11 bg-gray-200" />
      <div className="flex flex-row item-center justify-between">
        <div className="text-slate-600">
          2023 @ jub Huntly.All rights reserved.
        </div>
        <div className="space-x-3">
          {sosialMediaImg.map((item: string, i: number) => (
            <Image
              className="inline-block"
              src={item}
              key={i}
              alt={item}
              width={32}
              height={32}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
