import React from "react";
import BuyersGridCard from "./BuyersGridCard";
interface Props {
  style: string;
}
const BuyersGridView: React.FC<Props> = ({ style }) => {
  return (
    <div className={`${style}`}>
      <BuyersGridCard img={"/Assets/Dashboard/User.jpg"} />
    </div>
  );
};

export default BuyersGridView;
