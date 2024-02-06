import React, { useState } from "react";
import { BsCardList } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import BuyersListView from "./BuyersPageViews/BuyersListView";
import BuyersGridView from "./BuyersPageViews/BuyersGridView/BuyersGridView";

const BuyersPage = () => {
  const [View, SetView] = useState(true);
  return (
    <div className="w-full h-full pt-4 pb-8">
      <div className="w-full flex items-center justify-end gap-2 py-2">
        <button
          className="border-[1px] border-black-cool cursor-pointer rounded p-2"
          onClick={() => {
            SetView(true);
          }}>
          <BsCardList
            className={`${View ? "text-black-main" : "text-lightGray"}`}
          />
        </button>
        <button
          className="border-[1px] border-black-cool rounded cursor-pointer p-2"
          onClick={() => {
            SetView(false);
          }}>
          <BsFillGrid3X3GapFill
            className={`${View ? "text-lightGray" : "text-black-main"}`}
          />
        </button>
      </div>
      <BuyersListView style={`${View ? "inline-block" : "hidden"}`} />
      <BuyersGridView style={`${View ? "hidden" : "inline-block"}`} />
    </div>
  );
};

export default BuyersPage;
