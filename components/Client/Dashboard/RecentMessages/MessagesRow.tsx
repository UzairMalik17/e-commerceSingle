import React from "react";
import Link from "next/link";
interface Props {
  img: string;
  name: string;
  msg: string;
  time: string;
  date: string;
}
const MessagesRow: React.FC<Props> = ({ img, name, msg, date, time }) => {
  return (
    <Link
      href="admin/chat"
      className="w-full flex flex-row gap-4 items-center justify-start">
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={`w-[60px] h-[50px] bg-center bg-cover bg-no-repeat rounded-full`}></div>
      <div className="w-full flex flex-col items-start justify-start gap-2 text-[11px]">
        <p className="font-semibold text-xs">{name}</p>
        <p className="w-[170px] truncate">{msg}</p>
        <div className="w-full flex items-center justify-start gap-2">
          <p>{time}</p>
          <p className="font-semibold">|</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MessagesRow;
