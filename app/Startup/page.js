import React from "react";
import Section from "../components/Section";
import SectionInfo from "../components/SectionInfo";
import { FaArrowCircleDown } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-gray-100 py-20">
      <Section>
        <div className={"flex-center text-center flex-col gap-10 "}>
          <h1 className={"h1Heading max-w-2xl text-center"}>
            Empowering Startups to Build, Scale, and Succeed
          </h1>

          <p className={"pDesc text-gray-400 text-md max-w-[50rem] mx-auto"}>
            Enforca Technologies partners with startups to turn bold ideas into
            powerful digital products—combining expert talent, real-world
            experience, and scalable solutions.
          </p>

          <div
            className={
              "flex flex-col justify-center sm:justify-start lg:justify-start gap-5 w-fit max-sm:mb-10"
            }
          >
            <p className={"text-primary font-bold text-left"}>
              Contact us to bring your ideas to reality
            </p>
            <FaArrowCircleDown
              className={"animate-bounce text-primary size-6 self-center"}
            />
            <a
              href="mailto:info@mentor-techies.com"
              className={
                "px-9 py-3 rounded-full sm:block self-center bg-primary font-bold text-white outline-none cursor-pointer w-fit"
              }
            >
              Send Email
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
