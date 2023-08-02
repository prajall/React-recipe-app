import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingImg from "../images/loading.png";
import Similar from "../components/Similar";

const Recipe = () => {
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("ingredients");

  const params = useParams();

  const getRecipe = async () => {
    const check = localStorage.getItem(params.recipeId);

    if (check) {
      setInformation(JSON.parse(check));
      setLoading(false);
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=5f0553666a794dc49f24ebbb214073a6`
      );
      const recipe = await response.json();

      setInformation(recipe);
      setLoading(false);
      localStorage.setItem(params.recipeId, JSON.stringify(recipe));
    }
  };

  useEffect(() => {
    getRecipe();
    console.log("use effect");
  }, []);
  useEffect(() => {
    document.title = information.title;
  }, [information]);

  if (loading) {
    return (
      <div className="justify-center h-screen flex mt-20 text-xl">
        <img
          src={loadingImg}
          alt="loading"
          className="animate-spin w-[30px] h-[30px] mr-2"
        />
        <p className="">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-4 md:mt-8 lg:mt-14 h-screen">
      <h2 className="font-semibold text-2xl lg:text-3xl my-7 lg:my-7">
        {information.title}:
      </h2>
      <div className="md:flex gap-2 md:gap:5 lg:gap-12">
        <div className="image">
          <img
            src={information.image}
            alt={information.title}
            className="rounded-lg mb-3"
          />
        </div>
        <div>
          <div className="buttons md:mt-0 mt-4 mb-4">
            <button
              className={
                activeTab === "ingredients"
                  ? "duration-300 border-2 border-black bg-black text-white px-7 py-2 mr-3"
                  : "duration-300 border-2 border-black px-7 py-2 mr-3"
              }
              onClick={() => {
                setActiveTab("ingredients");
                console.log("setActiveTab ingredients");
              }}
            >
              Ingredients
            </button>
            <button
              className={
                activeTab === "instructions"
                  ? "duration-300 border-2 border-black bg-black text-white px-7 py-2"
                  : "duration-300 border-2 border-black px-7 py-2"
              }
              onClick={() => {
                setActiveTab("instructions");
                console.log("setActiveTab instructions");
              }}
            >
              Instructions
            </button>
          </div>
          <div className="information max-w-[500px]">
            {activeTab === "ingredients" && (
              <div>
                <ul className="list-disc">
                  {information.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "instructions" && (
              <div
                dangerouslySetInnerHTML={{ __html: information.instructions }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
