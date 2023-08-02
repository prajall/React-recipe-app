import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="w-full rounded-b-2xl shadow-md py-3 bg-amber-500">
      <div className="md:w-10/12 w-11/12 flex mx-auto items-center">
        <div className="">
          <Logo />
        </div>
        <Search />
        <button className="text-amber-800 p-1 rounded-full bg-amber-50">
          <CgProfile size={"30px"} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
