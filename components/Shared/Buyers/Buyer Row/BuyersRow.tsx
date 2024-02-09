import React from "react";
import { useRef } from "react";
import BuyersPopup from "../Buyer Popup/BuyersPopup";
interface Props {
  BuyerName: string;
  img: string;
  PurchasedProducts: string;
  Address: string;
  AmountSpent: string;
  email: string;
  phoneNumber: string;
  JoiningDate: string;
  style?: string;
}
const BuyersRow: React.FC<Props> = ({
  BuyerName,
  img,
  PurchasedProducts,
  Address,
  AmountSpent,
  style,
  email,
  phoneNumber,
  JoiningDate,
}) => {
  const dialogRef = useRef<HTMLDialogElement>();
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,0.5fr] items-center justify-start gap-2 border-t-2  border-lightGray border-opacity-30 px-4 py-1">
      <div className="w-full flex flex-row items-center justify-start gap-2">
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={`w-[40px] h-[40px] bg-center bg-cover bg-no-repeat rounded-full ${style}`}></div>
        <p className={`${style}`}>{BuyerName}</p>
      </div>
      <p className={`${style}`}>{PurchasedProducts}</p>
      <p className={`${style}`}>{Address}</p>
      <p className={`${style}`}>{AmountSpent}</p>
      <div className="w-full flex items-center justify-start">
        <button
          className="w-6 flex items-center justify-center font-extrabold text-center rounded bg-gray"
          onClick={() => {
            dialogRef.current?.showModal();
          }}>
          ...
        </button>
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
    </div>
  );
};

export default BuyersRow;
