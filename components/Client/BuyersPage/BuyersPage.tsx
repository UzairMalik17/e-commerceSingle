import React, { useState } from "react";
import { BsCardList } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import BuyersListView from "./BuyersPageViews/BuyersListView";

const BuyersPage = () => {
  const [View, SetView] = useState(true);
  return (
    <div className="w-full h-full p-1">
      <div className="w-full flex items-center justify-end gap-2 py-2">
        <button
          className="border-[1px] border-black-main cursor-pointer rounded p-2"
          onClick={() => {
            SetView(true);
          }}>
          <BsCardList
            className={`${View ? "text-black-main" : "text-lightGray"}`}
          />
        </button>
        <button
          className="border-[1px] border-black-main rounded cursor-pointer p-2"
          onClick={() => {
            SetView(false);
          }}>
          <BsFillGrid3X3GapFill
            className={`${View ? "text-lightGray" : "text-black-main"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default BuyersPage;
