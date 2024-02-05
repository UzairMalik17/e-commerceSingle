import React from "react";
interface Props {
  heading: string;
  value: string;
}
const PopupRow: React.FC<Props> = ({ heading, value }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <p>{heading}</p>
      <p>{value}</p>
    </div>
  );
};

export default PopupRow;
