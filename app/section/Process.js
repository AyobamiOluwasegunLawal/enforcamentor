"use client";

import Image from "next/image";
import React, {useState } from "react";
import image from "../contants/image";
import { process } from "../contants/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import "../globals.css";

const Process = () => {
  const [realIndex, setRealIndex] = useState(0);

  return (
    <div className="py-10 flex flex-col md:flex-row gap-10 px-10 h-[2500px] max-mobile-m:h-[2600px] max-tablet:h-[1800px] max-mobile-l:h-[2300px] md:h-[1200px] lg:h-[1200px] xl:h-[1200px] ">
      <div className="basis-1/3 space-y-5">
        <h2 className="h2Heading text-primary">Our development process</h2>
        <p className="text-gray-400 text-lg"> Strategy, planning, development, testing, deployment</p>

        <Image src={image.process} alt="process" />
      </div>

      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        onSlideChange={(swiper) => {
          console.log("Real Index:", swiper.realIndex); // Debug
          setRealIndex(swiper.realIndex); // 🚀 Track REAL index (ignores loop duplicates)
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          enabled: false,
        }}
        modules={[Pagination, Autoplay, Mousewheel, Keyboard]}
        // mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        className="mySwiper max-w-xl"
      >
        {process.map((item, idx) => (
          <SwiperSlide
            key={item.id}
            className={`h-full pt-5 pb-20 px-7 rounded-2xl transition-colors duration-300 ${
              realIndex === idx
                ? "bg-primary text-white"
                : "border-primary border-2 bg-blue-100 opacity-50"
            } space-y-5 transition-colors ease-in-out duration-300`}
          >
            <div className="space-y-5">
              <h2
                className={`h2Heading ${
                  realIndex === idx ? "text-yellow-500" : "#f3f4f6"
                }`}
              >
                {idx + 1}. {item.title}
              </h2>
              <p>{item.desc}</p>
              {/* indicator column (aligns with bullets) */}
              <div className="indicator-bar w-3 transition-colors duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Process;
