import Image from "next/image";
import React from "react";
import image from "../contants/image";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Whyus = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-10 px-10 mb-20">
      <div className="basis-2/3">
        <div className="overflow-hidden">
          <Image
            src={image.whyus}
            alt="whyus"
            className="hover:scale-[1.07] duration-700 transition-all"
          />
        </div>
      </div>

      <div className="basis-2/3">
        <div className="space-y-7">
          <h1 className="h1Heading">Why US</h1>
          <div>
            <div className="space-y-3">
              <p>
                We are a deV Shop with a wide area of African tech talents. We
                build world-class solutions for the world. We are backed by 54
                Collective, a venture platform.
              </p>

              <span>We have built solutions such as</span>
            </div>
          </div>
          <ul className=" text-blue-600 space-y-5">
            <li>
              <IoCheckmarkDoneSharp className="size-5 inline-block" /> Fintech
              Apps
            </li>
            <li>
              <IoCheckmarkDoneSharp className="size-5 inline-block" />{" "}
              White-labeled fintech solutions for banks
            </li>
            <li>
              <IoCheckmarkDoneSharp className="size-5 inline-block" /> AI
              solutions for Edtechs and health techs
            </li>
            <li>
              <IoCheckmarkDoneSharp className="size-5 inline-block" /> Web and
              app-based solutions for logistics and many more.
            </li>
          </ul>
        </div>
      </div>

     
    </section>
  );
};

export default Whyus;
