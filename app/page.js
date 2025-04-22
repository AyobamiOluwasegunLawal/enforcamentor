import React from "react";
import Services from "./section/Services";
import Hero from "./section/Hero";
import Success from "./section/Success";
import Impact from "./section/Impact";
import Testimonials from "./section/Testimonials";
import { FaWhatsappSquare } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative">
      <Hero />

      <Services />

      <Success />

      <Impact />

      <Testimonials />

      <div className="cursor-pointer fixed right-0 bottom-20">
        <a
          href="https://wa.me/+97470640796"
          target="_blank"
        >
          
        <FaWhatsappSquare className="size-16 text-green-500" />
        </a>
      </div>
    </section>
  );
};

export default Home;
