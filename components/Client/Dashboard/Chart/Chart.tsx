import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

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
const Chart = () => {
  return (
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
  );
};

export default Chart;
