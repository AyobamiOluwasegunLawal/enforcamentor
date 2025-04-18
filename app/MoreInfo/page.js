import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import image from "../contants/image";

const page = () => {
  return (
    <div className=" bg-gray-100 py-20">
      <Section>
        <div
          className={
            "space-y-5 mb-20 flex flex-col items-center text-center px-10 "
          }
        >
          <h1 className={"h1Heading text-canter leading-tight "}>About Us</h1>

          <p className={"pDesc text-gray-400 text-md max-w-[50rem] mx-auto"}>
            Enforca Technologies is an international software development
            company registered in the United States, United Kingdom, and
            Nigeria. We provide full-cycle software development services
            tailored to meet the unique needs of startups, small and
            medium-sized enterprises (SMEs), and large organizations.
          </p>
        </div>
      </Section>

      <div className="bg-white px-10 py-20">
        <Section>
          <div className="grid max-mobile-xl:grid-cols-1 mobile-xl:grid-cols-1 max-tablet:place-items-center tablet:grid-cols-2 tablet-l:grid-cols-3">
            <div>
              <div className={"space-y-5"}>
                <p className={"text-primary font-bold justify-start "}>
                  End-to-end digital product development experts.
                </p>

                <h1 className={"max-md:text-3xl text-5xl"}>
                  Transforming Ideas into Powerful Digital Products
                </h1>

                <p className={"text-gray-400 max-w-[30rem]"}>
                  Our team specializes in building high-performance websites,
                  web applications, and mobile apps that drive innovation and
                  digital transformation. From concept to launch, we offer
                  end-to-end solutions that include product design, development,
                  testing, deployment, and ongoing maintenance.
                </p>
              </div>
            </div>

            <div className="px-10 gap-7 place-content-evenly">
              <Image src={image.teamTwo} alt={"about img"} />
            </div>

            <div className={"space-y-7"}>
              <div className={"space-y-5"}>
                <p className={"text-primary font-bold justify-start"}>
                  Real-world experience for future innovators.
                </p>

                <p className={"text-gray-400 max-w-[30rem]"}>
                  At Enforca, we are passionate about nurturing the next
                  generation of tech talent. We offer structured internship and
                  SIWES programs for students, as well as real-world project
                  opportunities for developers, product managers, and product
                  designers. By working on live projects, participants gain
                  practical experience, build their portfolios, and grow their
                  professional skills in a collaborative and supportive
                  environment.
                </p>
              </div>

              <div className={"space-y-3"}>
                <p className={"text-primary font-bold justify-start"}>
                  Building ideas. Empowering future innovators.
                </p>

                <p className={"text-gray-400 max-w-[30rem]"}>
                  Whether you&apos;re a business looking to bring your digital ideas
                  to life or a tech enthusiast eager to gain hands-on
                  experience, Enforca Technologies is your trusted partner in
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
};

export default page;
