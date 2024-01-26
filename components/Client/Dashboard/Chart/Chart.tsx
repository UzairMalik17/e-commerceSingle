import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
interface Props {
  data: {
    uv: number;
  }[];
}

const Chart: React.FC<Props> = ({ data }) => {
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
