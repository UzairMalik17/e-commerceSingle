import React from "react";
import BuyersRow from "../../../Shared/Buyers/Buyer Row/BuyersRow";
const menu = ["BuyerName", "Address", "PurchasedProducts", "AmountSpent"];
const buyersInfo = [
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
  {
    BuyerName: "Jacob Jason",
    img: "/Assets/Dashboard/User.jpg",
    PurchasedProducts: "23",
    Address: "st Paul Street Los Vegas",
    AmountSpent: "$453",
    email: "JhonMckay@gmail.com",
    phoneNumber: "+923409574",
    JoiningDate: "24-03-2021",
    style: "",
  },
];
interface Props {
  style: string;
}
const BuyersListView: React.FC<Props> = ({ style }) => {
  return (
    <section
      className={`w-full h-[600px] flex flex-col items-start justify-start bg-background border-[1px] drop-shadow-lg rounded-lg border-lightGray overflow-hidden ${style}`}>
      <div className="w-full flex flex-row items-center justify-between p-4">
        <p>Buyers</p>
        <div className="w-[115px] bg-black-main text-center text-white-main text-sm p-2">
          View More
        </div>
      </div>
      <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,0.5fr] items-center justify-start border-t-[1px]  border-lightGray gap-2 p-4">
        {menu.map((item, index) => {
          return (
            <p className="text-xs" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="w-full overflow-y-scroll ThinScrollbar">
        {buyersInfo.map((item, index) => {
          return (
            <BuyersRow
              key={index}
              BuyerName={item.BuyerName}
              img={item.img}
              Address={item.Address}
              PurchasedProducts={item.PurchasedProducts}
              AmountSpent={item.AmountSpent}
              email={item.email}
              JoiningDate={item.JoiningDate}
              phoneNumber={item.phoneNumber}
              style={`text-[10px]`}
            />
          );
        })}
      </div>
      <div className="w-full flex items-center bg-lavaRed text-white-main py-6">
        Pagination
      </div>
    </section>
  );
};

export default BuyersListView;
