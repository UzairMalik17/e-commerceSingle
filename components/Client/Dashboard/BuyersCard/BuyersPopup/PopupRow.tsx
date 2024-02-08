import React from "react";
interface Props {
  heading: string;
  value: any;
  style?: string;
}
const PopupRow: React.FC<Props> = ({ heading, value, style }) => {
  return (
    <div className={`w-full flex items-center justify-between`}>
      <p className={`${style}`}>{heading}</p>
      <p className={`${style}`}>{value}</p>
    </div>
  );
};

export default PopupRow;
