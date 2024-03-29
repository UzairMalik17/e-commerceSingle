import React from "react";
import OverviewCard from "./OverviewCard/OverviewCard";
import Statistics from "./Statistics/Statistics";
import RecentSales from "./RecentSales/RecentSales";
import RecentMessages from "./RecentMessages/RecentMessages";
import OrdersCard from "./BuyersCard/BuyersCard";
const CardData = [
  {
    title: "Orders",
    status: "↑ Up by 24%",
    amount: "890",
  },
  {
    title: "Sales",
    status: "↑ Up by 14%",
    amount: "$5400",
  },
  {
    title: "Buyers",
    status: "↑ Up by 10%",
    amount: "200",
  },
];
const DashboardComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify start gap-8 pt-4 pb-8">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        {CardData.map((item, index) => {
          return (
            <OverviewCard
              key={index}
              title={item.title}
              status={item.status}
              amount={item.amount}
              style="rounded-lg bg-background"
            />
          );
        })}
      </div>
      <Statistics />
      <div className="w-full h-full grid lg:grid-cols-2 gap-4">
        <RecentSales />
        <RecentMessages />
      </div>
      <OrdersCard />
    </div>
  );
};

export default DashboardComponent;
