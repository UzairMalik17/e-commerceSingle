import React from "react";
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
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr] items-center justify-start gap-2">
      <div className="w-full flex flex-row items-center justify-start gap-4">
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={`w-[60px] h-[50px] bg-center bg-cover bg-no-repeat rounded-full`}></div>
        <p className={`${style}`}>{Buyer}</p>
      </div>

      <p className={`${style}`}>{PurchasedProducts}</p>
      <p className={`${style}`}>{Address}</p>
      <p className={`${style}`}>{AmountSpent}</p>
      <button
        className="w-6 h-6 flex items-center justify-center bg-background"
        onClick={() => {
          return alert("Clicked");
        }}>
        ...
      </button>
    </div>
  );
};

export default BuyersRow;
