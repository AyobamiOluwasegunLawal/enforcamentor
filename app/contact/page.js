import React from "react";
import Section from "../components/Section.jsx";

const Contact = () => {
  return (
    <section>
      <Section className={"text-center"}>
        <div className="pt-26 text-center space-y-10 pb-10">
          <h1 className={"h1Heading max-w-2xl mx-auto text-center"}>We’d Love to Hear From You!</h1>

          <p className={"pDesc text-gray-400 text-md max-w-[30rem] mx-auto"}>
            We architect scalable apps, build high-performance teams, and
            accelerate product growth.
          </p>
        </div>
      </Section>

      <div
        className={
          "bg-primary flex flex-col items-center justify-center h-80 p-20 gap-8 mb-32"
        }
      >
        <h2
          className={
            "text-white text-center text-4xl md:text-5xl font-semibold"
          }
        >
          Interested in joining our team?
        </h2>

        <a
          href="mailto:Engineering@enforca"
          className={"text-black bg-white w-fit px-9 py-3 rounded-md"}
        >
          Send us an Email
        </a>
      </div>
    </section>
  );
};
export default Contact;
