import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ cookingHandler }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="lg:w-2/3 md:w-2/3 grid lg:grid-cols-2   gap-2 mt-4">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          cookingHandler={cookingHandler}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  cookingHandler: PropTypes.func,
};

export default Recipes;
