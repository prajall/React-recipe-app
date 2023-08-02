import React from "react";
import { heroImage } from "../images";
import { BsArrowDownShort } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full md:flex my-5 items-center">
      <div className="md:hidden">
        <img src={heroImage} alt="Image" className="w-96 ranslate-x-[50%]" />
      </div>
      <div className="left md:w-1/2 z-10">
        <h1 className="lg:text-7xl text-5xl leading-tight font-bold ">
          Explore{" "}
          <p className="text-amber-500 inline-flex styled-font"> Dishes </p>
          <br /> From <br /> Around The <br />
          World
        </h1>

        <motion.button
          className="bg-amber-500 flex text-lg items-center text-amber-50 py-1 px-3 mt-9"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Explore Now
          <BsArrowDownShort fontSize={"2em"} />
        </motion.button>
      </div>
      <div className="right md:w-1/2 hidden md:flex">
        <img src={heroImage} alt="Image" className="" />
      </div>
    </div>
  );
};

export default Hero;
