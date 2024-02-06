import React, { ReactNode } from "react";
interface Props {
  icon: ReactNode;
  content: string;
  style?: string;
}
const BuyersGridCardRow: React.FC<Props> = ({ icon, style, content }) => {
  return (
    <div className="w-full flex items-center justify-start gap-2">
      {icon}
      <p className={`${style}`}>{content}</p>
    </div>
  );
};

export default BuyersGridCardRow;
