"use client";

import React from "react";
import Section from "../components/Section";
import SectionInfo from "../components/SectionInfo";
import { testimonials } from "../contants/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination} from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="px-10 py-10">
      <Section>
        <div className="flex-center text-center">
          <SectionInfo
            sectionPTitle={"Don't take it from us"}
            sectionHead={"What our clients say"}
            style={"h2Heading"}
          />
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className={"space-y-3 "}>
              <div
                className={
                  " relative max-sm:max-w-sm bg-blue-100 p-10 h-auto max-w-2xl text-gray-700 mx-auto rounded-2xl space-y-5 hover:bg-blue-700 hover:text-white transition ease-in-out duration-300"
                }
              >
                <p>{testimonial.comment}</p>

                <hr className={"border-gray-300"} />

                <div className={"flex justify-between"}>
                  <div>
                    <p className={"font-bold"}>{testimonial.client}</p>

                    <span className={"text-sm"}>{testimonial.location}</span>
                  </div>

                  <div className={"flex gap-2"}>{testimonial.star}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  );
};

export default Testimonials;
