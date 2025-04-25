"use client";

import React, { useEffect } from "react";
import logo from "../contants/logo";
import Image from "next/image";
import { navLinks, services } from "../contants/data";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const [navBg, setNavBg] = React.useState(false);
  const [isActive, setIsActive] = React.useState("Home");

  const handleSidebarOpen = () => {
    setIsSideBarOpen((prev) => !prev);
    console.log(isSideBarOpen);
  };
  const handleNavBg = () => {
    if (window.scrollY >= 1) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  const handleActive = (title) => {
    setIsActive(title);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleNavBg);

    return () => {
      window.removeEventListener("scroll", handleNavBg);
    };
  }, []);

  useEffect(() => {

  }, [])

  return (
    <section>
      <header
        className={`fixed w-full max-mobile-s:px-3 max-mobile-m:px-5 max-mobile-l:px-7 max-tablet:px-10 tablet:px-10 py-5 ${
          navBg ? "bg-white transition shadow-xl ease-out" : "bg-transparent "
        } z-2`}
      >
        <nav className=" max-w-7xl mx-auto justify-between gap-10">
          <div className="items-center gap-10">
            <div className="max-mobile-s:w-28 max-mobile-m:w-32 max-mobile-l:w-36 max-tablet:w-40 tablet:w-40">
              <Link href={"/"}>
              <Image src={logo.enforca} alt="Logo Enforca" className="w-full" /></Link>
            </div>

            <ul className="flex gap-10 max-tablet:hidden">
              {navLinks.map((link) => (
                <Link target={link?.target} href={link.href} key={link.id} className="font-semibold">
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>

          <div className="tablet:hidden ">
            <GiHamburgerMenu onClick={handleSidebarOpen} className="size-6" />
          </div>
        </nav>

        {isSideBarOpen ? (
          <motion.div
            initial={{ width: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ width: 200 }}
            className={
              " absolute top-0 left-0  max-xl:w-[90%] max-sm:w-[60%] h-screen bg-primary z-50 gap-10 md:hidden shadow-xl pt-3 px-5"
            }
          >
            <div className={"right-0 mb-5"}>
              <RxCross2
                className={"size-6 text-white font-bold"}
                onClick={() => setIsSideBarOpen(false)}
              />
            </div>
            <ul className={"text-black flex flex-col gap-5 font-semibold mb-5"}>
              {navLinks.map((link) => (
                  <Link
                  key={link.id}
                    onClick={() => setIsSideBarOpen(false)}
                    href={link.href}
                    className="w-full border-b-2 border-blue-100 text-white hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </header>
    </section>
  );
};

export default Header;
