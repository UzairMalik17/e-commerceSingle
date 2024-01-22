import React from "react";
import OverviewCard from "./OverviewCard/OverviewCard";
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
    <div className="w-full h-full flex flex-col items-center justify start gap-8 p-4">
      <div className="w-full h-full grid lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default DashboardComponent;
