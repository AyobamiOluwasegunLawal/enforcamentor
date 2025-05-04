import React from "react";
import Section from "../components/Section";

const TopSection = () => {
  return (
    <div className="pt-32">
      <Section>
        <div className="min-h-96 bg-primary p-5 flex items-center justify-center">
          <h1 className="h1Heading text-white text-center">
            Championing African talents to create world class tech products.
          </h1>
        </div>
      </Section>
    </div>
  );
};

export default TopSection;
