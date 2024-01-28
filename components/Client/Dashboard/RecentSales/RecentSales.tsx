import React from "react";
import SalesRow from "./SalesRow";
const menu = ["Order", "Purchase Date", "Quantity", "Price"];
const sales = [
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
  {
    Order: "Jhon",
    PurchaseDate: "28.04.21",
    Quantity: "3",
    Price: "$3200",
  },
];
const RecentSales = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-3 bg-background border-[1px] drop-shadow-lg border-lightGray rounded-lg p-4">
      <p className="font-semibold text-sm">Recent Sales</p>
      <SalesRow
        Order={menu[0]}
        PurchaseDate={menu[1]}
        Quantity={menu[2]}
        Price={menu[3]}
        style={`font-semibold text-xs`}
      />
      <div className="w-full h-full flex flex-col items-start justify-start text-xs gap-4">
        {sales.map((item, index) => {
          return (
            <SalesRow
              key={index}
              Order={item.Order}
              PurchaseDate={item.PurchaseDate}
              Quantity={item.Quantity}
              Price={item.Price}
              style={`text-[11px]`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentSales;
