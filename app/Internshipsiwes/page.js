import React from "react";
import Section from "../components/Section";
import image from "../contants/image";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import logo from "../contants/logo";
import CountdownTimer from "../components/CountdownTimer";

const page = () => {
  const twentyEightDaysFromNow = new Date(
    Date.now() + 28 * 24 * 60 * 60 * 1000
  ).toISOString();

  const date = new Date();
  console.log(date);
  return (
    <div className="py-20">
      <div className="bg-white mb-30 mt-10 md:mt-20">
        <Section>
          <div
            className={"justify-between item max-tablet:flex-col px-10 mb-20"}
          >
            <div className={"space-y-5 basis-1/2"}>
              <h1 className={"h1Heading text-primary"}>
                Empowering Talent, Driving Innovation
              </h1>

              <p className={"text-gray-400 text-lg max-w-[50rem] mx-auto"}>
                Enforca Technologies is a global tech enabler committed to
                developing Africa’s next generation of digital professionals. We
                help individuals grow their skills through hands-on experience,
                mentorship, and real-world projects—unlocking potential and
                building future-ready talent.
              </p>
            </div>

            <div className={"basis-1/2 rounded-full overflow-hidden mt-10"}>
              <Image src={image.siwes} alt={"siwes picture"} />
            </div>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col md:flex-row  md:justify-between md:items-center px-10 py-10 mb-20">
            <h2 className="h2Heading text-primary">Techies Lab</h2>

            <Image
              src={logo.arrow}
              alt={"siwes picture"}
              className="hidden md:block"
            />

            <div className=" pDesc text-md font-semibold max-w-lg space-y-4 mt-4">
              <p>
                A playing field is where talents are grilled to become
                world-class tech experts.
              </p>

              <p>
                It’s a community-based system where you are supported until you
                can stand alone to deliver the best product to the world.
              </p>

              <span className="flex items-center gap-3">
                <div>
                  <GoArrowRight className="inline" /> Practice
                </div>
                <div>
                  <GoArrowRight className="inline" /> Learn{" "}
                </div>
                <div>
                  <GoArrowRight className="inline" /> Get Employed
                </div>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-10 gap-20 mb-20">
            <div className="w-[300px] mx-auto md:w-[800px] lg:w-[1000px]">
              <Image
                src={image.bulb}
                alt={"siwes picture"}
                className="w-full"
              />
            </div>

            <div className="bg-blue-100 transition-colors ease-in-out hover:bg-white hover:shadow-2xl py-16 px-10 rounded-3xl space-y-9">
              <h2 className="h2Heading text-primary">The Process</h2>

              <ul>
                <li className="flex gap-3 items-center">
                  <GoArrowRight />
                  Get onboarded
                </li>

                <li className="flex gap-3 items-center">
                  <GoArrowRight />
                  Get placed on a task
                </li>

                <li className="flex gap-3 items-center">
                  <GoArrowRight />
                  Get a monthly review of your progress.
                </li>

                <li className="flex gap-3 items-center">
                  <GoArrowRight />
                  Get employed via our AI job search.
                </li>
              </ul>

              <p>
                Africa’s contribution to the global workforce is currently 10%,
                this not because of the personnel but because “Most” don’t meet
                global work standards.
              </p>

              <p>
                We are out to change the narrative! We understand that tech goes
                beyond the training and we intend to use this to fill the gap
                between training and what is required on the job.
              </p>
            </div>
          </div>

          <div className="px-10 w-full mb-20">
            <Image src={image.globe} alt={"siwes picture"} className="w-full" />
          </div>
        </Section>

        <div className="text-center bg-primary py-20 px-8">
          <h2 className="h2Heading text-white">
            Currently Accepting Developers
          </h2>

          <CountdownTimer target={twentyEightDaysFromNow} />

          <h2 className="h2Heading text-white max-w-lg text-2xl md:text-3xl mx-auto mt-10">
            Ready to begin? Send us an email via Engineering@enforcatech.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
