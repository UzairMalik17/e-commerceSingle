import React from "react";
import Chart from "../Chart/Chart";
interface Props {
  title: string;
  amount: string;
  status: string;
  data: {
    uv: number;
  }[];
  style: string;
}
const StatisticsCard: React.FC<Props> = ({
  title,
  amount,
  status,
  data,
  style,
}) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-between p-4 ${style}`}>
      <div className="w-full flex flex-col items-left justify-start">
        <p>{title}</p>
        <p className="text-2xl font-semibold">{amount}</p>
        <p className="text-sm text-lavaRed">{status}</p>
      </div>
      <div className="w-[150px] h-[50px]">
        <Chart data={data} />
      </div>
    </div>
  );
};

export default StatisticsCard;
