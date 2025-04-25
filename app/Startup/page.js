"use client";

import React from "react";
import Section from "../components/Section";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";
import image from "../contants/image";
import Whyus from "../section/Whyus";
import Process from "../section/Process";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import logo from "../contants/logo";

const page = () => {
  return (
    <div className="pt-20">
      <div className=" mb-30 max-md:mt-10">
        <Section>
          <div className={"flex flex-col md:flex-row md:items-center px-10"}>
            <div className={"space-y-5"}>
              <h1 className={"h1Heading text-primary md:max-w-sm lg:max-w-xl"}>
                Empowering Startups to Build, Scale, and Succeed
              </h1>

              <p
                className={
                  "text-gray-400 text-lg max-w-[50rem] mx-auto md:max-w-sm lg:max-w-xl"
                }
              >
                Enforca Technologies partners with startups to turn bold ideas
                into powerful digital products—combining expert talent,
                real-world experience, and scalable solutions.
              </p>

              {/* <div className={"mt-10 w-fit flex flex-col items-center space-y-2"}>
              <p className={"text-primary font-bold text-left"}>
              Contact us to bring your ideas to reality
              </p>
              <FaArrowCircleDown
                className={"animate-bounce text-primary size-6"}
              />
            </div> */}
            </div>

            <div className="w-[350px] md:w-[300px] lg:w-[400px] md:mx-auto mt-10">
              <Image
                src={image.phone2}
                alt={"siwes picture"}
                className="w-full"
              />
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <Whyus />
      </Section>

      <div className="bg-gray-100">
        <Section>
          <Process />
        </Section>
      </div>

      <div className="mt-20 space-y-10 px-10">
            <p className="pTitle text-center text-primary">Clients that trust us</p>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper max-w-sm"
        >
          <SwiperSlide>
            <Image src={logo.buck} alt={"siwes picture"} className="w-20 h-fit" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={logo.stav} alt={"siwes picture"} className="size-6" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={logo.wealth} alt={"siwes picture"} className="w-20 h-fit" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default page;
