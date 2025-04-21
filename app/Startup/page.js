import React from "react";
import Section from "../components/Section";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";
import image from "../contants/image";

const page = () => {
  return (
    <div className="px-10 py-20">
      <Section>
        <div
          className={
            "justify-between item max-tablet:flex-col"
          }
        >
          <div className={"space-y-5 basis-1/2"}>
            <h1 className={"h1Heading"}>
            Empowering Startups to Build, Scale, and Succeed
            </h1>

            <p className={"text-gray-400 text-lg max-w-[50rem] mx-auto"}>
            Enforca Technologies partners with startups to turn bold ideas
            into powerful digital products—combining expert talent, real-world
               experience, and scalable solutions.
            </p>

            <div className={"mt-10 w-fit flex flex-col items-center space-y-2"}>
              <p className={"text-primary font-bold text-left"}>
              Contact us to bring your ideas to reality
              </p>
              <FaArrowCircleDown
                className={"animate-bounce text-primary size-6"}
              />
              <a
                href="mailto:Engineering@enforcatech.com"
                className={
                  "bg-primary w-fit py-2 px-4 text-white rounded-md"
                }
              >
                Send Email
              </a>
            </div>
          </div>

          <div className={"basis-1/2"}>
            <Image src={image.siwesTwo} alt={"siwes picture"} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
