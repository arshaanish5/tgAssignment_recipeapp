import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import Carousel from "./components/Carousel";
import SocialIcons from "./components/SocialIcons";
import axios from "axios";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000);
    fetchRandomRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    setRecipes(res.data.meals.slice(0, 6));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    setRecipes(res.data.meals);
  };

  return showSplash ? (
    <SplashScreen />
  ) : (
    <div>
      <h1 className="head">Recipedia</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search for recipes..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <div className="grid">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
        ))}
      </div>

      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      <Carousel />
      <SocialIcons />
    </div>
  );
}

export default App;
