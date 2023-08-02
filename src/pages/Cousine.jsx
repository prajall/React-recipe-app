import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cousine = () => {
  const [cousine, setCousine] = useState([]);

  let params = useParams();

  const getCousine = async (name) => {
    const check = localStorage.getItem(params.type);

    if (check) {
      setCousine(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=5f0553666a794dc49f24ebbb214073a6&number=9&cousine=${name}`
      );
      const recipes = await data.json();
      setCousine(recipes.results);
      localStorage.setItem(params.type, JSON.stringify(recipes.results));
    }
  };

  useEffect(() => {
    getCousine(params.type);
    document.title = `${params.type} cousines`;
  }, [params.type]);

  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-7 my-7">
      {cousine.map((item) => {
        return (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            key={item.id}
          >
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt="item.title" />
                <p className="mt-2">{item.title}</p>
              </Link>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

const Card = styled.div`
  border-radius: 15px;

  img {
    border-radius: 15px;
    // height: auto;
  }
`;
export default Cousine;
