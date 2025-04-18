import React from "react";
import Section from "../components/Section";
import SectionInfo from "../components/SectionInfo";
import image from "../contants/image";
import Image from "next/image";

const Success = () => {
  return (
    <div className="py-20 px-10">
      <Section>
        <SectionInfo
          sectionPTitle={"Our Key to Success"}
          sectionHead={"Local Impact, Global Tech Stack"}
          style={"h2Heading"}
        />

        <div className={"flex gap-16 flex-col md:flex-row relative"}>
          <div className={"basis-1/2"}>
            <div className={"space-y-5 text-gray-500 text-md mb-24"}>
              <p>
                With deep roots in the startup and innovation ecosystem, Enforca
                Technologies partners with clients as a full-service technology
                solutions provider—guiding projects from concept to deployment
                and beyond.
              </p>

              <p>
                Having successfully delivered diverse projects across
                industries, we craft end-to-end digital solutions that go beyond
                just building products—we align with your vision, team, and
                operational needs to create lasting impact. Our unique
                model—local expertise combined with global capabilities—allows
                us to deliver cutting-edge technology solutions at competitive
                rates without compromising quality.
              </p>
            </div>

            <Image src={image.team} alt="team" />
          </div>

          <div className={"basis-1/2"}>
            <div className={"space-y-5 text-gray-500 text-md mb-30"}>
              <p>
                We serve as the bridge between your business goals and
                world-class tech talent. At Enforca, we are committed to
                nurturing the next generation of digital professionals,
                providing hands-on experience to developers, designers, and
                product managers. Through our structured programs, we upskill
                dozens of talents each year to meet international standards,
                with plans to scale this impact significantly.
              </p>

              <p>
                Successfully developed and currently managing the SaaS
                infrastructure for one of the fastest-growing startups.
              </p>
            </div>

            <ul className={"flex flex-col gap-5 mb-20"}>
              <div className={"space-x-2"}>
                <span className={"blue-box"} />
                <li className={"text-gray-500 text-md"}>
                  Developers actively engaged in client projects across
                  multiple industries, with our team expanding each month.
                </li>
              </div>

              <div className={"space-x-2"}>
                <span className={"blue-box"} />
                <li className={"text-gray-500 text-md"}>
                  Developers dedicated to building and maintaining
                  open-source, high-impact solutions that contribute to the
                  global tech community.
                </li>
              </div>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Success;
