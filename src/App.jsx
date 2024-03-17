import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookings from "./components/Cookings/Cookings";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const [cookings, setCookings]= useState([])
  const cookingHandler = recipe =>{
    const alreadyExists = cookings.find((cooking)=> cooking.recipe_id == recipe.recipe_id);
    if(alreadyExists){
      toast("Recipe already exists");
    }
    else{
      const newCookings = [...cookings, recipe];
    setCookings(newCookings);
    toast.success("Recipe added")
    }
    
  }
  return (
    <div className="max-w-7xl mx-auto">
       <Header></Header>
      
       <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-3">
       <Recipes cookingHandler={cookingHandler}></Recipes>
       <Cookings cookings={cookings}></Cookings>
       </div>
       <ToastContainer />
    </div>
  );
};

export default App;