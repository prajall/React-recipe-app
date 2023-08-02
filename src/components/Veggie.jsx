import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=5f0553666a794dc49f24ebbb214073a6&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data);
      setVeggie(data.recipes);
    }
  };

  return (
    <div className="my-7">
      <h1 className="text-3xl my-4 font-bold ">Our Vegetarian Picks</h1>
      <Wrapper>
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              600: {
                perPage: 1,
              },
              800: {
                perpage: 2,
              },
            },
            drag: "free",
            arrows: true,
            pagination: false,
          }}
        >
          {veggie.map((recipe) => {
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

export default Veggie;

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
