import React from 'react'

const RecipeDetails = ({recipe}) => {
	return (
		<div className="details">
		  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
		  <h2>{recipe.strMeal}</h2>
		  <p><strong>Category:</strong> {recipe.strCategory}</p>
		  <p><strong>Region:</strong> {recipe.strArea}</p>
		  <p>{recipe.strInstructions.substring(0, 300)}...</p>
		  <h4>Ingredients:</h4>
		  <ul>
			{Array.from({ length: 20 }).map((_, i) => {
			  const ingredient = recipe[`strIngredient${i + 1}`];
			  const measure = recipe[`strMeasure${i + 1}`];
			  return ingredient ? <li key={i}>{ingredient} - {measure}</li> : null;
			})}
		  </ul>
		</div>
	  );
	}

export default RecipeDetails