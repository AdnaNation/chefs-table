import Cookings from "./components/Cookings/Cookings";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
       <Header></Header>
      
       <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-3">
       <Recipes></Recipes>
       <Cookings></Cookings>
       </div>
       
    </div>
  );
};

export default App;