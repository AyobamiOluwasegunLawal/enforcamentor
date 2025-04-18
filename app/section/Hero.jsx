"use client";

import React from "react";
import Section from "../components/Section";
import SectionInfo from "../components/SectionInfo";
import Link from "next/link";
import image from "../contants/image";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Ideate", "Build", "Launch"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing one letter at a time
  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const typing = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed

      return () => clearTimeout(typing);
    } else {
      // Wait before moving to next word
      const hold = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 2000); // hold the full word

      return () => clearTimeout(hold);
    }
  }, [charIndex, wordIndex]);

  return (
    <div className="relative max-tablet-l:min-h-[calc(100vh-650px)]">
      <Section>
        <div className="px-10 justify-between flex-col tablet:flex-row max-tablet-l:min-h-[calc(100vh-750px)] min-h-[calc(100vh-300px)]">
          <div className="max-w-lg max-m:w-md max-tablet-l:mt-10 ">
            <div className={`space-y-3 max-tablet-l: my-16`}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex} // animate per word
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-700 text-primary"
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </motion.span>
              </AnimatePresence>

              <h1 className="h1Heading">Local Impact, Global Tech Stack</h1>

              <p className="pDesc">
                We architect scalable apps, build high-performance teams, and
                accelerate product growth.
              </p>
            </div>

            <div className="mb-10">
              <Link
                href={"/contact"}
                className={
                  "px-9 py-3 font-bold rounded-full border-primary bg-primary text-white transition duration-100 ease-in"
                }
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <div className="absolute -top-10 right-10 max-tablet-l:hidden w-[720px] h-[720px]">
        <Image src={image.hero} alt="hero" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
