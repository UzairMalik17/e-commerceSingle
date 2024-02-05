import React from "react";
import { IoIosClose } from "react-icons/io";
import PopupRow from "./PopupRow";
const PopusInfo = [
  {
    heading: "Personal Information",
    value: "",
  },
  {
    heading: "Name",
    value: "Jacob Jason",
  },
  {
    heading: "Email",
    value: "JhonMckay@gmail.com",
  },
  {
    heading: "Phone",
    value: "+923409574",
  },
  {
    heading: "Address",
    value: "st Paul Street Los Vegas",
  },
  {
    heading: "Professional Information",
    value: "",
  },
  {
    heading: "Purchased Products",
    value: "23",
  },
  {
    heading: "Amount Spent",
    value: "$453",
  },
  {
    heading: "Joinig Date",
    value: "24-03-2021",
  },
];
interface Props {
  CloseHandler: any;
  reference: any;
  image: string;
  style?: string;
}
const BuyersPopup: React.FC<Props> = ({
  CloseHandler,
  reference,
  image,
  style,
}) => {
  return (
    <dialog
      ref={reference}
      className="w-full sm:w-[600px] backdrop:bg-black-main backdrop:opacity-50 rounded font-semibold">
      <div className="w-full flex flex-row items-center justify-between bg-lightningYellow px-6 py-4">
        <p className="text-white-main">Buyers Detail</p>
        <IoIosClose
          className="w-[25px] h-[25px] bg-red text-white-main rounded-full"
          onClick={CloseHandler}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-4 text-xs p-6">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`w-[80px] h-[80px] bg-center bg-cover bg-no-repeat rounded-full ${style}`}></div>
        {PopusInfo.map((item, index) => {
          return (
            <PopupRow
              key={index}
              heading={item.heading}
              value={item.value}
              style={`${(index === 0 || index === 5) && "text-base py-2"}`}
            />
          );
        })}
        <div className="w-full flex items-center justify-end gap-4">
          <button
            id="close"
            className="bg-lavaRed border-[1px] border-lavaRed text-white-main font-medium text-sm rounded py-2 px-12"
            onClick={CloseHandler}>
            Cancel
          </button>
          <button
            id="close"
            className="border-[1px] border-black-main font-medium text-sm rounded py-2 px-12"
            onClick={CloseHandler}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default BuyersPopup;
