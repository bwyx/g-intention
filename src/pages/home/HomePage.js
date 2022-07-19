import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

// Import Slides
import Overview from "./slides/Overview";
import VisionMission from "./slides/VisionMission";
import Team from "./slides/Team";
import Milestones from "./slides/Milestones";
import Products from "./slides/Products";
import TouchWithUs from "./slides/TouchWithUs";

const HomePage = () => {
    return (
     <>
     <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
            type: "progressbar",
            clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide> <Overview/> </SwiperSlide>
      <SwiperSlide> <VisionMission/> </SwiperSlide>
      <SwiperSlide> <Team/> </SwiperSlide>
      <SwiperSlide> <Milestones/> </SwiperSlide>
      <SwiperSlide> <Products/> </SwiperSlide>
      <SwiperSlide> <TouchWithUs/> </SwiperSlide>
    </Swiper>
    </>
    );
}
 
export default HomePage;