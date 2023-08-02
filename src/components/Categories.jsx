import { React, useState } from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Categories = () => {
  const [activeCousine, setActiveCousine] = useState("");

  return (
    <div className="py-5 my-4 ">
      <Tab>
        <h2 className="text-4xl font-extrabold mb-4 styled-font">
          Categories:
        </h2>
        {/* <p className="text-center opacity-90 text-red-600">
          (Currently bugged)
        </p> */}

        <div className="wrapper flex justify-center gap-3 md:gap-10 lg:gap-20">
          <NavLink to={"/cousine/american"}>
            <motion.div
              onClick={() => {
                setActiveCousine("american");
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <div
                className={
                  activeCousine === "american"
                    ? "duration-200 bg-slate-800 text-slate-50 border-2 border-slate-800 pt-3 pl-1 justify-center flex scale-75 md:scale-100 w-[70px] h-[70px] rounded-full"
                    : " duration-200 border-2 text-slate-800 border-slate-800 pt-3 pl-1 justify-center flex scale-75 md:scale-100 w-[70px] h-[70px] rounded-full"
                }
              >
                <FaPizzaSlice className="text-[40px]" />
              </div>
              <p>American</p>
            </motion.div>
          </NavLink>
          <NavLink to={"/cousine/italian"}>
            <motion.div
              onClick={() => {
                setActiveCousine("italian");
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <div
                className={
                  activeCousine === "italian"
                    ? "scale-75 md:scale-100 duration-200 bg-slate-800 text-slate-50 border-2 border-slate-800 pt-3 pl-1 justify-center flex w-[70px] h-[70px] rounded-full"
                    : "scale-75 md:scale-100 duration-200  border-2 text-slate-800 border-slate-800 pt-3 pl-1 justify-center flex w-[70px] h-[70px] rounded-full"
                }
              >
                <FaHamburger size={"40px"} />
              </div>
              <p>Italian</p>
            </motion.div>
          </NavLink>
          <NavLink to={"/cousine/thai"}>
            <motion.div
              onClick={() => {
                setActiveCousine("thai");
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <div
                className={
                  activeCousine === "thai"
                    ? "scale-75 md:scale-100 duration-200 bg-slate-800 text-slate-50 border-2 border-slate-800 pt-3 pl-1 justify-center flex w-[70px] h-[70px] rounded-full"
                    : "scale-75 md:scale-100 duration-200  border-2 text-slate-800 border-slate-800 pt-3 pl-1 justify-center flex w-[70px] h-[70px] rounded-full"
                }
              >
                <GiNoodles size={"40px"} />
              </div>
              <p>Thai</p>
            </motion.div>
          </NavLink>
          <NavLink to={"/cousine/japanese"}>
            <motion.div
              onClick={() => {
                setActiveCousine("japanese");
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <div
                className={
                  activeCousine === "japanese"
                    ? "scale-75 md:scale-100 duration-200 bg-slate-800 text-slate-50 border-2 border-slate-800 pt-3 pl-1 justify-center flex w-[70px] h-[70px] rounded-full"
                    : "scale-75 md:scale-100 duration-200  border-2 text-slate-800 border-slate-800 pt-3 pl-1 justify-center flex w-[70px] h-[70px] rounded-full"
                }
              >
                <GiChopsticks size={"40px"} />
              </div>
              <p>Japanese</p>
            </motion.div>
          </NavLink>
        </div>
      </Tab>
    </div>
  );
};

export default Categories;

// const SLink = styled(NavLink)`
//   text-decoration: none;

//   display: flex;

//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   svg {
//     border-radius: 50%;
//     background: grey;
//     color: white;
//     width: 2rem;
//     height: 2rem;
//     padding: 1rem;
//   }
//   p {
//     color: grey
//     margin: 2px;
//   }

//   &.active > svg {
//     background-color: red;
//   }
// `;
const Tab = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
