import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookings from "./components/Cookings/Cookings";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const [cookings, setCookings] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [totalCount, setTotalCount] = useState({ minute: 0, calories: 0 });

  const cookingHandler = (recipe) => {
    const alreadyExists = cookings.find(
      (cooking) => cooking.recipe_id == recipe.recipe_id
    );
    if (alreadyExists) {
      toast("Recipe already exists");
    } else {
      const newCookings = [...cookings, recipe];
      setCookings(newCookings);
      toast.success("Recipe added");
    }
  };

  const handlePrepare = (newRecipe) => {
    const newCook = cookings.filter(
      (cooking) => cooking.recipe_id != newRecipe.recipe_id
    );
    const currentToCook = cookings.filter(
      (cooking) => cooking.recipe_id === newRecipe.recipe_id
    );

    setCookings(newCook);

    setCurrentlyCooking((prevCookItems) => [
      ...prevCookItems,
      ...currentToCook,
    ]);
  };

  useEffect(() => {
    currentlyCooking.map((currentItem) => {
      setTotalCount({
        minute: totalCount.minute + currentItem.preparing_time,
        calories: totalCount.calories + currentItem.calories,
      });
    });
  }, [currentlyCooking]);

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>

      <div>
        <div className="text-center lg:px-80 md:px-40 mt-8 lg:mt-12 space-y-3">
          <h2 className="text-3xl lg:text-4xl font-semibold">Our Recipes</h2>
          <p className="text-[#150B2B99]">
            Our handmade dishes with its ingredients is now public for you guys.
            You can exlplore it and learn how to cook the recipes.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-3">
          <Recipes cookingHandler={cookingHandler}></Recipes>
          <Cookings
            handlePrepare={handlePrepare}
            cookings={cookings}
            currentlyCooking={currentlyCooking}
            totalCount={totalCount}
          ></Cookings>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default App;
