import React from "react";
import Section from "../components/Section";
import SectionInfo from "../components/SectionInfo";
import { services } from "../contants/data";
import { FaGreaterThan } from "react-icons/fa";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-gray-100 px-5 pb-20">
      <Section>
        <div className="py-20 flex-center max-w-xl mx-auto text-center">
          <SectionInfo
            sectionPTitle={"What we do"}
            sectionHead={"Scalable Code, Solid Results."}
            sectionDesc={
              "We build fast, reliable solutions with smart architecture and top-tier dev teams."
            }
            style="h2Heading"
          />
        </div>

        <ul className="grid max-mobile-xl:grid-cols-1 mobile-xl:grid-cols-2 max-tablet-l:grid-cols-3 tablet-l:grid-cols-4 gap-10">
          {services.map((item) => (
            <li key={item.id} className="px-10 space-y-3 py-6 shadow-lg rounded-lg text-center">
              <Image src={item.icon} alt={item.title} />

              <h2 className={"font-bold text-xl mt-5"}>{item.title}</h2>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Services;
