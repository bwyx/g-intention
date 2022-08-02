import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// Import Slides
import Overview from "./slides/Overview";
import VisionMission from "./slides/VisionMission";
import Team from "./slides/Team";
import Founder from "./slides/Founder";
import Milestones from "./slides/Milestones";
import Products from "./slides/Products";
import TouchWithUs from "./slides/TouchWithUs";

const HomePage = () => {
    return (
     <>
     <div className="main_slide_container">
          <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
            <SwiperSlide> <Overview/> </SwiperSlide>
            <SwiperSlide> <VisionMission/> </SwiperSlide>
            <SwiperSlide> <Founder/> </SwiperSlide>
            <SwiperSlide> <Team/> </SwiperSlide>
            <SwiperSlide> <Milestones/> </SwiperSlide>
            <SwiperSlide> <Products/> </SwiperSlide>
            <SwiperSlide> <TouchWithUs/> </SwiperSlide>
          </Swiper>
     </div>
    
    </>
    );
}
 
export default HomePage;