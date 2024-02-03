import React from "react";
import Image from "next/image";
interface Props {
  Buyer: string;
  img?: string;
  PurchasedProducts: string;
  Address: string;
  AmountSpent: string;
  style?: string;
}
const BuyersRow: React.FC<Props> = ({
  Buyer,
  img,
  PurchasedProducts,
  Address,
  AmountSpent,
  style,
}) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,0.5fr] items-center justify-start gap-2 border-t-2  border-lightGray border-opacity-30 px-4 py-1">
      <div className="w-full flex flex-row items-center justify-start gap-2">
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={`w-[40px] h-[40px] bg-center bg-cover bg-no-repeat rounded-full ${style}`}></div>

        <p className={`${style}`}>{Buyer}</p>
      </div>

      <p className={`${style}`}>{PurchasedProducts}</p>
      <p className={`${style}`}>{Address}</p>
      <p className={`${style}`}>{AmountSpent}</p>
      <button
        className="w-full flex items-center justify-start"
        onClick={() => {
          return alert("Clicked");
        }}>
        <p className="w-6 flex items-center justify-center font-extrabold text-center rounded bg-gray ">
          ...
        </p>
      </button>
    </div>
  );
};

export default BuyersRow;
