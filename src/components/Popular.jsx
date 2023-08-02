import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=5f0553666a794dc49f24ebbb214073a6&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div className="mt-7">
      <h1 className="text-3xl mb-7 font-bold">Popular picks: </h1>
      <Wrapper>
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              800: {
                perpage: 2,
              },
              600: {
                perPage: 1,
              },
            },
            drag: "free",
            arrows: true,
            pagination: false,
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <motion.div
                  key={recipe.id}
                  initial={{ scale: 0.9, y: 30 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.09 }}
                  className="py-4"
                >
                  <Card>
                    <Link to={`/recipe/${recipe.id}`}>
                      <div>
                        <img src={recipe.image} alt={recipe.title} />
                        <p className="mt-2 text-center">{recipe.title}</p>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Popular;

const Wrapper = styled.div`
  // margin: 10px;
`;
const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  margin: 0px 30px;

  img {
    border-radius: 15px;
    object-fit: cover;
    min-width: 50%;
    height: auto;
  }
`;
