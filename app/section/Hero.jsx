"use client";

import React from "react";
import Section from "../components/Section";
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
    <div className="flex flex-col tablet:flex-row tablet:items-center max-tablet-l:min-h-[calc(100vh-650px)]">
      <Section>
        <div className="px-10 justify-between flex-col tablet:flex-row max-tablet-l:min-h-[calc(100vh-750px)] min-h-[calc(100vh-300px)]">
          <div className="max-w-lg max-m:w-md max-tablet-l:mt-10 mx-auto">
            <div className={`space-y-3 max-tablet-l: mt-16`}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex} // animate per word
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl max-sm:text-4xl max-lg:5xl font-700 text-primary"
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </motion.span>
              </AnimatePresence>

              <h1 className="font-700 text-3xl max-tablet-l:text-2xl max-mobile-l:text-xl text-dark">
                Local Impact, Global Tech Stack
              </h1>

              <p className="pDesc">
                We architect scalable apps, build high-performance teams, and
                accelerate product growth.
              </p>
            </div>

            <div className="my-10">
              <Link
                href={"mailto:Engineering@enforcatech.com"}
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

      <Image
        src={image.hero}
        width={700}
        height={300}
        alt="hero"
        className="tablet:w-[350px] tablet-l:w-[450px] lg:w-[600px] xl:w-[700px]"
      />
    </div>
  );
};

export default Hero;
