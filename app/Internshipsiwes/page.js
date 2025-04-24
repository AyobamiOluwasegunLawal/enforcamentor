import React from "react";
import Section from "../components/Section";
import { FaArrowCircleDown } from "react-icons/fa";
import image from "../contants/image";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-20">
      <div className="bg-white mb-30 mt-10 md:mt-20">
        <Section>
          <div className={"justify-between item max-tablet:flex-col px-10"}>
            <div className={"space-y-5 basis-1/2"}>
              <h1 className={"h1Heading text-yellow-400"}>
                Empowering Startups to Build, Scale, and Succeed
              </h1>

              <p className={"text-gray-400 text-lg max-w-[50rem] mx-auto"}>
                Enforca Technologies partners with startups to turn bold ideas
                into powerful digital products—combining expert talent,
                real-world experience, and scalable solutions.
              </p>

              <div
                className={"mt-10 w-fit flex flex-col items-center space-y-2"}
              >
                <p className={"text-primary font-bold text-left"}>
                  Contact us to bring your ideas to reality
                </p>
                <FaArrowCircleDown
                  className={"animate-bounce text-primary size-6"}
                />
              </div>
            </div>

            <div className={"basis-1/2 rounded-full overflow-hidden"}>
              <Image src={image.siwes} alt={"siwes picture"} />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default page;
