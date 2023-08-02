import React from "react";
import { BsFacebook, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { threads } from "../images";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full ">
      <p className="text-center pt-5">Contacts:</p>
      <div className="w-11/12 flex flex-col items-center justify-center md:w-10/12 mx-auto">
        <section className="socials pt-1 mb-2 flex justify-center gap-7 lg:gap-10">
          <Link
            to="https://www.facebook.com/prajal.maharjan.7"
            target="_blank"
            className="p-2"
          >
            <BsFacebook size={"20px"} />
          </Link>
          <Link
            to="https://www.instagram.com/prajalmaharjan"
            target="_blank"
            className="p-2"
          >
            <BsInstagram size={"20px"} />
          </Link>
          <Link to="https://github.com/prajall" target="_blank" className="p-2">
            <BsGithub size={"20px"} />
          </Link>
          <Link
            to="https://www.threads.net/@prajalmaharjan"
            target="_blank"
            className="p-2"
          >
            <img src={threads} className="w-[25px] mt-[-2px] " />
          </Link>
        </section>

        <p className="font-times mt-2 mb-5 text-sm">
          @2023 copyright. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
