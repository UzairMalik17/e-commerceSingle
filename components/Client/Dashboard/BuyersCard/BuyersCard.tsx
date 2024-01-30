import React from "react";
import BuyersRow from "./BuyersRow";
const menu = ["Buyer", "Address", "PurchasedProducts", "AmountSpent"];
const buyers = [
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
  {
    Buyer: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "st Paul Street Los Vegas",
    Address: "23",
    AmountSpent: "$453",
    style: "",
  },
];
const BuyersCard = () => {
  return (
    <section className="w-full h-full flex flex-col items-start justify-start gap-6 bg-background border-[1px] drop-shadow-lg rounded-lg border-lightGray overflow-hidden">
      <div className="w-full flex flex-row items-center justify-between px-4 pt-4">
        <p>Buyers</p>
        <div className="w-[115px] bg-black-main text-center text-white-main text-sm p-2">
          View More
        </div>
      </div>
      <div className="w-full h-[50px] grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr] items-center justify-start border-t-[1px]  border-lightGray gap-2 p-4">
        {menu.map((item, index) => {
          return (
            <p className="text-xs" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      {buyers.map((item, index) => {
        return (
          <BuyersRow
            Buyer={item.Buyer}
            img={item.img}
            Address={item.Address}
            PurchasedProducts={item.PurchasedProducts}
            AmountSpent={item.PurchasedProducts}
            style={`font-semibold text-xs p-4`}
          />
        );
      })}
    </section>
  );
};

export default BuyersCard;
