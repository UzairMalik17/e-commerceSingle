import React from "react";
import Wrapper from "../../Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import Divider from "../../Shared/Divider/Divider";
import Link from "next/link";
import { Data } from "../../../constants/DummyData/Data";
import NextImage from "@/components/Shared/Image/NextImage";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper style="w-full bg-background">
      <div className="w-full flex justify-center items-center flex-col">
        <Link href="/" className="relative w-[153px] h-[60px] my-12">
          <Image src={Data.logo.white} alt="" fill className="object-contain" />
        </Link>
        <Divider styles="w-full h-[1px] bg-black-cool/10 " />
        <div className="w-full md:py-14 py-6 grid md:grid-cols-5 grid-cols-1 gap-6">
          {/* About */}
          <div className="w-full md:col-span-2">
            <h2 className="font-inter font-medium mb-[1.25rem] text-black-off text-[18px] capitalize">
              About Us
            </h2>
            <p className="font-inter font-normal text-black-off/60 text-[14px] md:max-w-[300px]">
              We know there are a lot of threa developers our but we pride into
              a firm in the industry.
            </p>
          </div>
          {/* Features */}
          <div className="w-full">
            <h2 className="font-inter font-medium mb-[1.25rem] text-black-off text-[18px] capitalize">
              Features
            </h2>
            <div className="flex justify-start items-start flex-col gap-2">
              {Data.FooterData.Features.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.Route}
                    className="font-inter font-normal text-black-off/60 text-sm hover:underline hover:text-main-brand">
                    {item.Title}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* General Links */}
          <div className="w-full">
            <h2 className="font-inter font-medium mb-[1.25rem] text-black-off text-[18px] capitalize">
              General
            </h2>
            <div className="flex justify-start items-start flex-col gap-2">
              {Data.FooterData.General.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.Route}
                    className="font-inter font-normal text-black-off/60 text-[14px] hover:underline hover:text-main-brand">
                    {item.Title}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Helpful Links */}
          <div className="w-full">
            <h2 className="font-inter font-medium mb-[1.25rem] text-black-off text-[18px] capitalize">
              Helpful
            </h2>
            <div className="flex justify-start items-start flex-col gap-2">
              {Data.FooterData.Helpful.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.Route}
                    className="font-inter font-normal text-black-off/60 text-[14px] hover:underline hover:text-main-brand">
                    {item.Title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <Divider styles="w-full h-[1px] bg-black-cool/10" />
        <div className="w-full mt-4 flex md:justify-between justify-center items-center md:flex-row flex-col mb-4">
          {/* social icons */}
          <div className="flex justify-center items-center md:flex-row flex-col md:gap-8">
            <div className="flex justify-center items-center gap-4">
              {Data.FooterData.Social.map((item: any, index: number) => {
                return (
                  <Link key={index} href={item.Route}>
                    {item.Icon}
                  </Link>
                );
              })}
            </div>
            <p className="font-inter font-normal text-black-off/60 text-[16px] md:my-0 my-4">
              ©{year} Quomodosoft All rights reserved
            </p>
          </div>
          {/* Payment cards */}
          <NextImage
            imageSrc="/Assets/Footer/payment-card.webp"
            containerStyle="w-[200px] md:w-[318px] h-[28px]"
            imageStyle="object-contain"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
