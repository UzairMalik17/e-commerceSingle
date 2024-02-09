import React from "react";
import { useRef } from "react";
import BuyersPopup from "@/components/Shared/Buyers/Buyer Popup/BuyersPopup";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdMapsHomeWork } from "react-icons/md";
interface Props {
  BuyerName: string;
  img: string;
  PurchasedProducts: string;
  Address: string;
  AmountSpent: string;
  email: string;
  phoneNumber: string;
  JoiningDate: string;
}
const BuyersGridCard: React.FC<Props> = ({
  BuyerName,
  img,
  PurchasedProducts,
  Address,
  AmountSpent,
  phoneNumber,
  email,
  JoiningDate,
}) => {
  const dialogRef = useRef<HTMLDialogElement>();
  return (
    <section className="w-full h-full flex flex-col items-center justify-start gap-6 bg-background border-[1px] drop-shadow-lg rounded-lg border-lightGray p-4">
      <div className="w-full grid grid-cols-[0.75fr,2.25fr] items-center justify-center gap-2">
        <div className="w-full flex item-center justify-center">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
            className={`w-[60px] h-[60px] bg-center bg-cover bg-no-repeat rounded-full drop-shadow-lg border-4 border-white-main`}></div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex flex-row items-center justify-between gap-2">
            <p>{BuyerName}</p>
            <button
              className="flex items-center justify-start"
              onClick={() => {
                dialogRef.current?.showModal();
              }}>
              <p className="w-6 flex items-center justify-center font-extrabold text-center rounded bg-gray ">
                ...
              </p>
            </button>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2 text-xs">
            <div className="w-full flex items-center justify-start gap-2">
              <FaPhoneAlt className="w-4 h-4" />
              <p className={``}>{phoneNumber}</p>
            </div>
            <div className="w-full flex items-center justify-start gap-2">
              <LuMail className="w-5 h-5" />
              <p className={``}>{email}</p>
            </div>
            <div className="w-full flex items-center justify-start gap-2">
              <MdMapsHomeWork className="w-5 h-5" />
              <p className={``}>{Address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-lightGray"></div>
      <div className="w-full h-full grid grid-cols-[10fr,0.15fr,10fr] items-start justify-start gap-4 text-sm">
        <div className="w-full flex justify-start item-center">
          <div className="flex flex-col justify-center item-center text-center gap-4">
            <p>Purchased Products</p>
            <p>{PurchasedProducts}</p>
          </div>
        </div>
        <div className="w-[2px] h-full bg-lightGray"></div>
        <div className="w-full flex justify-end item-center">
          <div className="flex flex-col justify-center item-center text-center gap-4">
            <p>Amount Spent</p>
            <p>{AmountSpent}</p>
          </div>
        </div>
      </div>
      <BuyersPopup
        reference={dialogRef}
        image={img}
        BuyerName={BuyerName}
        PurchasedProducts={PurchasedProducts}
        AmountSpent={AmountSpent}
        Address={Address}
        email={email}
        phoneNumber={phoneNumber}
        JoiningDate={JoiningDate}
        CloseHandler={() => {
          dialogRef.current?.close();
        }}
      />
    </section>
  );
};

export default BuyersGridCard;
