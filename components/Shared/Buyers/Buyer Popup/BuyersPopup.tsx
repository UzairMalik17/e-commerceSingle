import React from "react";
import { IoIosClose } from "react-icons/io";
import PopupRow from "./PopupRow";

interface Props {
  CloseHandler: any;
  reference: any;
  image: string;
  style?: string;
  BuyerName: string;
  PurchasedProducts: string;
  Address: string;
  AmountSpent: string;
  email: string;
  phoneNumber: string;
  JoiningDate: string;
}
const BuyersPopup: React.FC<Props> = ({
  CloseHandler,
  reference,
  image,
  style,
  BuyerName,
  PurchasedProducts,
  Address,
  AmountSpent,
  phoneNumber,
  email,
  JoiningDate,
}) => {
  const PopusInfo: { heading: string; value: any }[] = [
    {
      heading: "Personal Information",
      value: "",
    },
    {
      heading: "Name",
      value: { BuyerName },
    },
    {
      heading: "Email",
      value: { email },
    },
    {
      heading: "Phone",
      value: { phoneNumber },
    },
    {
      heading: "Address",
      value: { Address },
    },
    {
      heading: "Professional Information",
      value: "",
    },
    {
      heading: "Purchased Products",
      value: { PurchasedProducts },
    },
    {
      heading: "Amount Spent",
      value: { AmountSpent },
    },
    {
      heading: "Joinig Date",
      value: { JoiningDate },
    },
  ];
  return (
    <dialog
      ref={reference}
      className="w-full sm:w-[600px] backdrop:bg-black-main backdrop:opacity-50 rounded font-semibold">
      <div className="w-full flex flex-row items-center justify-between bg-lightningYellow px-6 py-4">
        <p className="text-white-main">Buyers Detail</p>
        <IoIosClose
          className="w-[25px] h-[25px] bg-red text-white-main rounded-full cursor-pointer"
          onClick={CloseHandler}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-4 text-xs p-6">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`w-[80px] h-[80px] bg-center bg-cover bg-no-repeat rounded-full ${style}`}></div>
        <PopupRow heading="Personal Information" style="text-base py-2" />
        <PopupRow heading="Name" value={BuyerName} />
        <PopupRow heading="Email" value={email} />
        <PopupRow heading="Phone" value={phoneNumber} />
        <PopupRow heading="Address" value={Address} />
        <PopupRow heading="Professional Information" style="text-base py-2" />
        <PopupRow heading="Purchased Products" value={PurchasedProducts} />
        <PopupRow heading="Amount Spent" value={AmountSpent} />
        <PopupRow heading="Joining Date" value={JoiningDate} />
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
