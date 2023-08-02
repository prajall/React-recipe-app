import React from "react";
import logo from "../images/logo2.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src={logo} alt="Logo" className="lg:w-[80px] lg:h-[80px] w-[50px]" />
    </NavLink>
  );
};

export default Logo;
