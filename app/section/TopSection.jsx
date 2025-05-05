"use client";

import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Image from "next/image";
import image from "../contants/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const words = [
  "Scalable solution for start ups",
  "Gain Practical  Tech Experience",
  "Learn a new tech stack.",
];

const TopSection = () => {
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
    <div className="pt-24">
      <Section>
        <div className="min-h-96 bg-white p-5 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="h1Heading text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-primary max-w-2xl mb-10 capitalize">
              Championing African talents to create world class tech products.
            </h1>

            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex} // animate per word
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-6xl max-sm:text-4xl max-lg:5xl font-400 text-yellow-500"
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </motion.span>
            </AnimatePresence>

            <h1 className="font-700 text-3xl max-tablet-l:text-2xl max-mobile-l:text-xl text-dark mt-3 md:mt-5">
              Local Impact, Global Tech Stack
            </h1>

            <p className="pDesc">
              We architect scalable apps, powered by high-performance African
              teams.
            </p>

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

          <div className="w-[350px] tablet:w-[300px] tablet-l:w-[300px] lg:w-[400px] xl:w-[500px] rounded-3xl overflow-hidden">
            <Image
              src={image.hero}
              alt="hero"
              className="w-full hover:scale-90 transition duration-100 ease-in rounded-2xl h-full"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TopSection;
