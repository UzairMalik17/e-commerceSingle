import React, { useState } from "react";
import Divider from "../Divider/Divider";
import Dropdown from "../Dropdown/Dropdown";
import { Data } from "../../../constants/DummyData/Data";

function Search() {
  const [SearchedCategory, setSearchCategory] = useState<string | null>(
    "all categories"
  );
  const [SearchInput, setSearchInput] = useState<string | null>(
    "all categories"
  );
  return (
    <div className="flex gap-1 h-[44px]">
      <div className="md:w-[680px] w-full h-full border-[1px] border-black-cool grid sm:grid-cols-[65%_1px_calc(100%-65%-1px)] grid-cols-[50%_1px_calc(100%-50%-1px)]">
        <div className="w-full h-full">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className={`w-full h-full bg-transparent border-none outline-none font-inter font-medium text-[.75rem] text-input leading-[1rem] pl-4`}
            placeholder="Search products..."
          />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Divider styles="w-[.5px] h-[50%] bg-black-main/30 rounded-full" />
        </div>
        <div className="w-full h-full">
          <Dropdown
            Title="all categories"
            item={Data.SearchHeader.SearchCategory}
            Event={setSearchCategory}
          />
        </div>
      </div>
      <button className="w-[120px] h-full flex items-center justify-center bg-main-brand font-inter font-semibold text-[.875rem] text-white-main leading-[1.25rem] capitalize relative after:absolute after:left-0 after:top-0 after:bg-black-main after:w-0 after:h-full hover:after:w-full hover:after:duration-300">
        <p className="z-10">Search</p>
      </button>
    </div>
  );
}

export default Search;
