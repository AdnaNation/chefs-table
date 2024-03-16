import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
       <Header></Header>
       <Recipes></Recipes>
    </div>
  );
};

export default App;