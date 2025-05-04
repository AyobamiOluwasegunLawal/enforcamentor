import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import image from "../contants/image";

const TopSection = () => {
  return (
    <div className="pt-32">
      <Section>
        <div className="min-h-96 bg-white p-5 flex flex-col md:flex-row items-center justify-between">
          <h1 className="h1Heading text-4xl md:text-6xl text-primary max-w-2xl">
            Championing African talents to create world class tech products.
          </h1>

          <div className="w-[350px] tablet:mt-16 tablet:w-[300px] tablet-l:w-[300px] lg:w-[400px] xl:w-[500px] rounded-3xl overflow-hidden">
            <Image
              src={image.hero}
              alt="hero"
              className="w-full hover:scale-90 transition duration-100 ease-in rounded-2xl mt-10"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TopSection;
