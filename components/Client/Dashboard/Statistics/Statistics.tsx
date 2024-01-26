import React, { useState } from "react";
import StatisticsCard from "./StatisticsCard";
const timeMenu = [
  {
    title: "Week",
    data: [
      {
        title: "Orders",
        amount: "1500",
        status: "+ 5% Weekly growth",
      },
      {
        title: "Orders",
        amount: "1500",
        status: "+ 5% Weekly growth",
      },
      {
        title: "Orders",
        amount: "1500",
        status: "+ 5% Weekly growth",
      },
      {
        title: "Orders",
        amount: "1500",
        status: "+ 5% Weekly growth",
      },
      {
        title: "Orders",
        amount: "1500",
        status: "+ 5% Weekly growth",
      },
      {
        title: "Orders",
        amount: "1500",
        status: "+ 5% Weekly growth",
      },
    ],
    chart: [
      {
        uv: 9400,
      },
      {
        uv: 10398,
      },
      {
        uv: 19800,
      },
      {
        uv: 13908,
      },
      {
        uv: 14800,
      },
      {
        uv: 23800,
      },
      {
        uv: 24300,
      },
    ],
  },
  {
    title: "Month",
    data: [
      {
        title: "Orders",
        amount: "2000",
        status: "+ 10% Monthly growth",
      },
      {
        title: "Orders",
        amount: "2000",
        status: "+ 10% Monthly growth",
      },
      {
        title: "Orders",
        amount: "2000",
        status: "+ 10% Monthly growth",
      },
      {
        title: "Orders",
        amount: "2000",
        status: "+ 10% Monthly growth",
      },
      {
        title: "Orders",
        amount: "2000",
        status: "+ 10% Monthly growth",
      },
      {
        title: "Orders",
        amount: "2000",
        status: "+ 10% Monthly growth",
      },
    ],
    chart: [
      {
        uv: 9400,
      },
      {
        uv: 10398,
      },
      {
        uv: 19800,
      },
      {
        uv: 13908,
      },
      {
        uv: 14800,
      },
      {
        uv: 23800,
      },
      {
        uv: 24300,
      },
    ],
  },
  {
    title: "Year",
    data: [
      {
        title: "Orders",
        amount: "15000",
        status: "+ 23% Yearly growth",
      },
      {
        title: "Orders",
        amount: "15000",
        status: "+ 23% Yearly growth",
      },
      {
        title: "Orders",
        amount: "15000",
        status: "+ 23% Yearly growth",
      },
      {
        title: "Orders",
        amount: "15000",
        status: "+ 23% Yearly growth",
      },
      {
        title: "Orders",
        amount: "15000",
        status: "+ 23% Yearly growth",
      },
      {
        title: "Orders",
        amount: "15000",
        status: "+ 23% Yearly growth",
      },
    ],
    chart: [
      {
        uv: 9400,
      },
      {
        uv: 10398,
      },
      {
        uv: 19800,
      },
      {
        uv: 3908,
      },
      {
        uv: 24800,
      },
      {
        uv: 23100,
      },
      {
        uv: 24200,
      },
    ],
  },
];

const Week = [];
const Statistics = () => {
  const [time, setTime] = useState("Week");
  return (
    <div className="w-full h-full bg-background border-[1px] drop-shadow-lg border-lightGray rounded-lg">
      <div className="w-full h-full flex flex-col items-start justify-start gap-2 p-4">
        <p>Statistics</p>
        <div className="w-full h-full flex items-center justify-start">
          {timeMenu.map((item, index) => {
            return (
              <p
                key={index}
                className={`cursor-pointer rounded text-xs ${
                  time === item.title && "bg-black-main text-white-off"
                } py-1 px-4`}
                onClick={(e) => {
                  setTime(e.currentTarget.innerText);
                }}>
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full grid lg:grid-cols-2">
        {timeMenu
          .filter((item) => item.title === time)
          .map((item) => {
            const data = item.chart;
            return item.data.map((item, index) => {
              return (
                <StatisticsCard
                  key={index}
                  title={item.title}
                  amount={item.amount}
                  status={item.status}
                  data={data}
                  style={`${
                    index % 2 == 0 && "lg:border-r-2"
                  } border-lightGray border-t-2 border-opacity-20`}
                />
              );
            });
          })}
      </div>
    </div>
  );
};

export default Statistics;
