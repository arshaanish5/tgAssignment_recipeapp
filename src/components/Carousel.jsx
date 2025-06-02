import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Carousel = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
	  axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((res) => {
		setPopular(res.data.meals.slice(6, 12));
	  });
	}, []);
  return (
	<div className="carousel">
      <h3>Popular Recipes</h3>
      <div className="carousel-scroll">
        {popular.map((recipe) => (
          <div key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel