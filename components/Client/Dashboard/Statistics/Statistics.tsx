import React, { useState } from "react";
const timeMenu = [
  {
    title: "Week",
  },
  {
    title: "Month",
  },
  {
    title: "Year",
  },
];
const Statistics = () => {
  const [time, setTime] = useState("Week");
  return (
    <div className="w-full h-full bg-background">
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
    </div>
  );
};

export default Statistics;
