import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Similar = () => {
  const params = useParams();
  const [similarItems, setSimilarItems] = useState([]);
  const getSimilar = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.recipeId}/similar?apiKey=5f0553666a794dc49f24ebbb214073a6`
    );
    const data = await response.json();
    console.log(data);
    setSimilarItems(data);
  };
  useEffect(() => {
    getSimilar();
  }, []);
  return (
    <div>
      <Grid>
        {similarItems.map((item) => {
          return (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              key={item.id}
            >
              <Card>
                <Link to={`/recipe/${item.id}`}>
                  <img src={item.image} alt={item.title} className="w-full " />
                  <p className="text-center mr-12">{item.title}</p>
                </Link>
              </Card>
            </motion.div>
          );
        })}
      </Grid>
    </div>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  margin: 0px 10px;

  img {
    border-radius: 15px;
    object-fit: cover;
    max-width: 300px;
    height: auto;
  }
`;
export default Similar;
