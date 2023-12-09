import React, { ReactNode } from "react";
import Link from "next/link";
import * as Icons from "../../../../Svg/Icons";
interface Props {
  category: String;
  heading: String;
  style: String;
}
const BestDealsAdCard: React.FC<Props> = ({ category, heading, style }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center font-inter bg-cover bg-center bg-no-repeat ${style}`}>
      <div className="w-11/12 md:w-1/3 h-full flex flex-col justify-center items-center gap-8 text-center">
        <p className="uppercase font-semibold text-sm">{category}</p>
        <p className="text-3xl font-extrabold">{heading}</p>
        <div>
          <Link
            href="/products"
            className=" after:content-[''] relative after:absolute after:left-0 after:w-[0px] after:bg-black-main after:transition-all transition-all after:duration-300 duration-300 after:ease-linear ease-linear hover:after:w-full after:h-full z-10 after:-z-10 capitalize text-[.875rem] bg-white-main text-green-600 hover:text-white-main font-medium font-inter flex justify-center items-center gap-1 px-8 py-3">
            Learn More
            <Icons.ArrowRight fill="#FFBB38" stroke="none" ClassName="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestDealsAdCard;
