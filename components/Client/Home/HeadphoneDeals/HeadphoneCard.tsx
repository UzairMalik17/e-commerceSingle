import Link from "next/link";
import React, { ReactNode } from "react";
import * as Icons from "../../../../Svg/Icons";

interface Props {
  style?: string;
  title?: string;
}

const HeadphoneCard: React.FC<Props> = ({ style, title }: Props) => {
  return (
    <div
      className={`w-full h-full py-12 bg-cover bg-center bg-no-repeat ${style}`}>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 px-16">
        <p className="text-white-main text-[20px] md:text-[30px] capitalize font-medium">
          {title}
        </p>
        <Link
          href="/products"
          className=" after:content-[''] relative after:absolute after:-bottom-1 after:h-[0px] after:bg-green-600 after:transition-all transition-all after:duration-300 duration-300 after:ease-linear ease-linear hover:after:h-[60%] after:w-full z-10 after:-z-10 capitalize text-[.875rem] bg-transparent text-red font-medium font-inter flex justify-center items-center gap-1">
          View More
          <Icons.ArrowRight fill="#222222" stroke="none" ClassName="" />
        </Link>
      </div>
    </div>
  );
};

export default HeadphoneCard;
