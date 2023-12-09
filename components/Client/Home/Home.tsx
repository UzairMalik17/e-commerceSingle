import React, { useState } from "react";
import WithCards from "./Hero/WithCards";
import Qualities from "./Qualities/Qualities";
import SaleAndApp from "./SaleAndApp/SaleAndApp";
import Newsletter from "./Newsletter/Newsletter";
import HeadphoneDeals from "./HeadphoneDeals/HeadphoneDeals";
import BestDealsAd from "./BestDealsAd/BestDealsAd";

const Home = () => {
  return (
    <>
      <WithCards />
      <Qualities />
      <SaleAndApp />
      <BestDealsAd />
      <HeadphoneDeals />
      <Newsletter />
    </>
  );
};

export default Home;
