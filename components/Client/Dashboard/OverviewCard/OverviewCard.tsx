import { title } from "process";
import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
interface Props {
  title: string;
  status: string;
  amount: string;
  style?: string;
}
const data = [
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
];
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
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={400} height={100} data={data}>
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#5F6D7E"
                fill="#E9EBEE"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
