import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import HeadphoneCard from "@/components/Client/Home/HeadphoneDeals/HeadphoneCard";
const HeadphoneDeals = () => {
  return (
    <Wrapper>
      <div className="h-[250px] w-full col-span-1 md:col-span-2 xl:col-span-2 row-span-1 md:row-span-2 py-10">
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
            <HeadphoneCard
              title="Get the best deal for Headphones"
              style="w-full bg-[url('/Assets/Home/HeadphonesDeals/simple.jpg')]"
            />
          </SwiperSlide>
          {/* =======> sec slide */}
          <SwiperSlide>
            <HeadphoneCard
              title="Get the best deal for Headphones"
              style="w-full bg-[url('/Assets/Home/HeadphonesDeals/simple.jpg')]"
            />
          </SwiperSlide>
          {/* =======> third slide */}
          <SwiperSlide>
            <HeadphoneCard
              title="Get the best deal for Headphones"
              style="w-full bg-[url('/Assets/Home/HeadphonesDeals/simple.jpg')]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default HeadphoneDeals;
