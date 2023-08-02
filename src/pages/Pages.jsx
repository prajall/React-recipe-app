import React from "react";
import Cousine from "./Cousine";

import { Route, Routes } from "react-router-dom";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Searched from "./Searched";
import Categories from "../components/Categories";
import Recipe from "./Recipe";
import Home from "./Home";

const CombinedComponents1 = () => {
  return (
    <>
      <Home />
      <div className="border-b-4 border-t-4 border-amber-400">
        <Categories />
      </div>
      <div className=" border-b-4 border-amber-400">
        <Popular />
      </div>
      <Veggie />
    </>
  );
};
const CombinedCategories = () => {
  return (
    <>
      <Categories />
      <Cousine />
    </>
  );
};
const Pages = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto">
      <Routes>
        <Route path="/" element={<CombinedComponents1 />} />

        <Route path="/cousine/:type" element={<CombinedCategories />} />
        <Route path="/searched/:searchQuery" element={<Searched />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default Pages;
