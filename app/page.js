import React from "react";
import Services from "./section/Services";
import Success from "./section/Success";
import Impact from "./section/Impact";
import Testimonials from "./section/Testimonials";
import TopSection from "./section/TopSection";

const Home = () => {
  return (
    <section>
      <TopSection/>

      <Services />

      <Success />

      <Impact />

      <Testimonials />
    </section>
  );
};

export default Home;
