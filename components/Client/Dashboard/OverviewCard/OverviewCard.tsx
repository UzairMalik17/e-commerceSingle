import React from "react";
import Chart from "../Chart/Chart";
interface Props {
  title: string;
  status: string;
  amount: string;
  style?: string;
}

const OverviewCard: React.FC<Props> = ({ title, status, amount, style }) => {
  return (
    <div
      className={`w-full h-full flex flex-col items-start justify-between gap-6 border-[1px] drop-shadow-lg border-lightGray p-4 ${style}`}>
      <div className="w-full flex flex-col items-left justify-start">
        <p>{title}</p>
        <p className="text-sm text-lavaRed">{status}</p>
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-4">
        <div className="w-full h-full flex flex-col items-start justify-start gap-2">
          <p className="text-2xl font-semibold">{amount}</p>
          <p className="text-black-cool text-[14px] font-semibold">Monthly</p>
        </div>
        <div className="w-full h-full col-span-2">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
