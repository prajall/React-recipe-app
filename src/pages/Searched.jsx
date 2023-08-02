import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Searched = () => {
  const params = useParams();
  const [searchedItems, setSearchedItems] = useState([]);

  const getSearchedItems = async () => {
    const check = localStorage.getItem(params.searchQuery);

    if (check) {
      setSearchedItems(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=5f0553666a794dc49f24ebbb214073a6&query=${params.searchQuery}`
      );
      const results = await response.json();
      console.log(results);
      setSearchedItems(results.results);
      console.log(searchedItems.length);
      if (searchedItems.length === 0) {
        setNoItems(true);
      }
      localStorage.setItem(params.searchQuery, JSON.stringify(results.results));
    }
  };

  useEffect(() => {
    getSearchedItems();
  }, [params.searchQuery]);

  return (
    <div className="my-7 mx-auto flex flex-col justify-center">
      <p className="text-3xl font-bold mb-7">
        Results for "{params.searchQuery}":
      </p>
      <div className="grid lg:grid-cols-3">
        {searchedItems.map((item) => {
          return (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              key={item.id}
            >
              <div className="card max-w-[500px] rounded-lg my-5">
                <Link to={`/recipe/${item.id}`}>
                  <img
                    src={item.image}
                    alt="item.title"
                    className="w-full rounded-lg"
                  />
                  <p className="text-center">{item.title}</p>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
