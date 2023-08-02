import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Pages from "./Pages";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "Chef's Recipes";
  }, []);
  return (
    <div className="my-10 md:my-5 lg:my-0">
      <Hero />
    </div>
  );
};

export default Home;
