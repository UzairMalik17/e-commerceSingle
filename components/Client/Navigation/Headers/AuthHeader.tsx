import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import * as Icons from "../../../../Svg/Icons";
import { Data } from "../../../../constants/DummyData/Data";
import { Dialog } from "@mui/material";
import Divider from "../../../Shared/Divider/Divider";

const ContactHeader: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Wrapper style="h-[50px] border-b-[1px] border-gray">
      <div className="w-full h-full flex justify-between items-center">
        {/* Nav items */}
        <div className="flex justify-center items-center md:gap-6 gap-4">
          {Data?.ContactHeader.NavItem.map((nav: any, index: number) => {
            return (
              <Link
                key={index}
                href={nav.Route}
                className="font-inter font-medium text-black-soft text-[.75rem] leading-[1.5rem] capitalize"
              >
                {nav.Name}
              </Link>
            );
          })}
        </div>
        <div className="h-full flex justify-center items-center gap-4">
          <div className="h-full flex justify-center items-center">
            <Link
              href={""}
              className="font-inter font-semibold text-[.85rem] text-black-soft"
            >
              Login
            </Link>
            <Divider styles="w-[.5px] h-[50%] bg-black-main/30 rounded-full mx-4" />
            <Link
              href={""}
              className="font-inter font-semibold text-[.85rem] text-black-soft"
            >
              Sign Up
            </Link>
          </div>
          {/* <Divider styles="w-[.5px] h-[50%] bg-black-main/30 rounded-full" />
          <button
            onClick={handleClick}
            className="text-[.85rem] flex justify-center items-center leading-[1.25rem] h-[40px] font-inter font-semibold text-black-soft capitalize whitespace-nowrap"
          >
            Become{" "}
            <div className="Text-Animation overflow-hidden h-[1.25rem] ml-1">
              <div>
                <span>Seller</span>
              </div>
              <div>
                <span>Agent</span>
              </div>
              <div>
                <span>Seller</span>
              </div>
              <div>
                <span>Agent</span>
              </div>
              <div>
                <span>Seller</span>
              </div>
              <div>
                <span>Agent</span>
              </div>
            </div>
          </button> */}
        </div>
      </div>
      <Dialog
        open={open}
        // onClose={handleClick}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "white",
            borderRadius: "0px",
            width: {
              md: "400px",
              xs: "100%",
            },
          },
          overflow: "hidden",
        }}
      >
        <div className="w-full h-full bg-white-off p-4 flex justify-center items-center flex-col">
          <button onClick={handleClick} className={`self-end`}>
            <Icons.Cross
              ClassName="w-[26px] h-[26px] cursor-pointer"
              fill="red"
            />
          </button>
          <h3 className="font-inter font-semibold text-[24px] leading-[28px] text-black-off">
            Register As
          </h3>
          <div className="w-full h-[40px] grid grid-cols-2 mt-4 gap-4">
            <Link
              onClick={handleClick}
              href={"/register/seller"}
              className="w-full h-full flex justify-center items-center text-white-main bg-black-main font-inter font-medium text-[1rem] leading-[1.25rem]"
            >
              Seller
            </Link>
            <Link
              onClick={handleClick}
              href={"/register/agent"}
              className="w-full h-full flex justify-center items-center text-white-main bg-black-main font-inter font-medium text-[1rem] leading-[1.25rem]"
            >
              Agent
            </Link>
          </div>
        </div>
      </Dialog>
    </Wrapper>
  );
};

export default ContactHeader;
