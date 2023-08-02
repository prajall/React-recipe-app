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
  }, [params.type]);

  return (
    <Grid>
      {cousine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="item.title" />
              <p className="mt-2">{item.title}</p>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  border-radius: 15px;
  // overflow: hidden;
  // margin: 0px 10px;

  img {
    border-radius: 15px;
    // object-fit: cover;
    // max-width: 300px;
    height: auto;
  }
`;
export default Cousine;
