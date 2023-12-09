import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import BestDealsAdCard from "@/components/Client/Home/BestDealsAd/BestDealsAdCard";
const BestDealsAd = () => {
  return (
    <Wrapper>
      <div className="h-[400px] w-full col-span-1 md:col-span-2 xl:col-span-2 row-span-1 md:row-span-2 py-10">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className="mySwiper">
          {/* =======> one slide */}
          <SwiperSlide>
            <BestDealsAdCard
              category="headphones"
              heading="Get the best deal for Headphones"
              style="w-full bg-[url('/Assets/Home/BestDealsAd/Category.jpg')]"
            />
          </SwiperSlide>
          {/* =======> sec slide */}
          <SwiperSlide>
            <BestDealsAdCard
              category={"headphones"}
              heading="Get the best deal for Headphones"
              style="w-full bg-[url('/Assets/Home/BestDealsAd/Category.jpg')]"
            />
          </SwiperSlide>
          {/* =======> third slide */}
          <SwiperSlide>
            <BestDealsAdCard
              category={"headphones"}
              heading="Get the best deal for Headphones"
              style="w-full bg-[url('/Assets/Home/BestDealsAd/Category.jpg')]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default BestDealsAd;
