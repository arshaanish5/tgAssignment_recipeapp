import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        maxWidth: '600px',
        margin: '20px auto',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee',
        }}
      />
      <h3 style={{ fontSize: '1.1rem', padding: '10px' }}>{recipe.strMeal}</h3>
      <p style={{ fontSize: '0.9rem', color: '#666', paddingBottom: '10px' }}>
        Category: {recipe.strCategory} | Area: {recipe.strArea}
      </p>
    </div>
  );
};

export default RecipeCard;
