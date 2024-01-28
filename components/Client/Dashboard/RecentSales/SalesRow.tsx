import React from "react";
interface Props {
  Order: string;
  PurchaseDate: string;
  Quantity: string;
  Price: string;
  style?: string;
}
const SalesRow: React.FC<Props> = ({
  Order,
  PurchaseDate,
  Quantity,
  Price,
  style,
}) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr] gap-2">
      <p className={`${style}`}>{Order}</p>
      <p className={`${style}`}>{PurchaseDate}</p>
      <p className={`${style}`}>{Quantity}</p>
      <p className={`${style}`}>{Price}</p>
    </div>
  );
};

export default SalesRow;
