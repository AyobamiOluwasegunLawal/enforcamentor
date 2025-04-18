import React from "react";
import Section from "./components/Section";
import Image from "next/image";
import image from "./contants/image";
import SectionInfo from "./components/SectionInfo";
import Link from "next/link";
import Services from "./section/Services";
import Hero from "./section/Hero";
import Success from "./section/Success";
import Impact from "./section/Impact";
import Testimonials from "./section/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />

      <Services />

      <Success/>

      <Impact/>

      <Testimonials/>
    </>
  );
};

export default Home;
