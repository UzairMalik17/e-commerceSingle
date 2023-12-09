import React, { useEffect, useRef, useState } from "react";
import AuthHeader from "./Headers/AuthHeader";
import SearchHeader from "./Headers/SearchHeader";
import Wrapper from "../../Shared/ComponentWrapper/Wrapper";
import AllCategoriesMenu from "./AllCategoriesMenu";
import FullWidthNavDropdown from "./FullWidthNavDropdown";
import { Data } from "../../../constants/DummyData/Data";
import Link from "next/link";
import Search from "../../Shared/Search/Search";
import Dialog from "@mui/material/Dialog";
import * as Icons from "../../../Svg/Icons";
import { useRouter } from "next/router";

type Props = {
  Items: object;
};

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const Router = useRouter();
  return (
    <React.Fragment>
      <AuthHeader />
      <SearchHeader />
      <Wrapper style="md:hidden block">
        <Search />
      </Wrapper>
      {/* <Wrapper style="bg-main-green md:block hidden h-[60px]">
        <div className="w-full h-full relative flex justify-between items-center ">
          <div className="h-full md:flex justify-center items-center gap-8">
            <AllCategoriesMenu />
            <FullWidthNavDropdown Items={Data.Navbar.Shop} />
            {Data.Navbar.Menu.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.Route}
                  className="font-inter font-semibold text-[14px] leading-[1.25rem] text-white-main"
                >
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div>
      </Wrapper> */}
      <Wrapper style="md:block">
        <div className="w-full h-full flex justify-start items-center gap-8 overflow-auto HideScroll">
          {Data.Navbar.SingleNavMenu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href={item.Route}
                className={`font-inter font-medium text-[14px] relative leading-[36px] text-black-soft after:bottom-0 after:bg-black-soft after:absolute after:left-0 after:h-[1px] after:hover:w-full after:transition-all ${
                  Router.pathname === item.Route ? "after:w-full" : "after:w-0"
                } whitespace-nowrap`}
              >
                {item.Name}
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Navbar;
