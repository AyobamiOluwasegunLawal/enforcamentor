import React from "react";
import Section from "../components/Section";
import { FaArrowCircleDown } from "react-icons/fa";
import image from "../contants/image";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-10 py-30">
      <Section>
        <div
          className={
            "justify-between item max-tablet:flex-col"
          }
        >
          <div className={"space-y-5 basis-1/2"}>
            <h1 className={"h1Heading"}>
              Empowering Talent, Driving Innovation
            </h1>

            <p className={"text-gray-400 text-lg max-w-[50rem] mx-auto"}>
              Enforca Technologies is a global tech enabler committed to
              developing Africa’s next generation of digital professionals. We
              help individuals grow their skills through hands-on experience,
              mentorship, and real-world projects—unlocking potential and
              building future-ready talent.
            </p>

            <div className={"mt-10 w-fit flex flex-col items-center space-y-2"}>
              <p className={"text-primary font-bold text-left"}>
                Interested? Send us a mail
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
            <Image src={image.siwes} alt={"siwes picture"} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
