import React from "react";
import "./RecipeDetail.css";

export default function RecipeDetail({ recipe }) {
  return (
    <div>
      <div className="recipe-detail">
        <div className="recipe-detail__header">
          <div className="header-image">
            <img src={recipe?.image} alt="" className="recipe-img"/>
          </div>
          <div className="category">{recipe.meal_type}</div>
          <h1>{recipe.title}</h1>
          <h3>Servings: {recipe.servings}</h3>
        </div>
        <div className="recipe-detail__content">
          <div className="ingredients-list">
            <h3 className="recipe-detail__subheading">Ingredients</h3>
            <ul className="ingredients">
              {recipe.ingredients.map((ingredient) => (
                <li className="ingredient">{ingredient}</li>
              ))}
            </ul>
          </div>
          <h3 className="recipe-detail__subheading">Instructions</h3>
          <div className="instructions">{recipe.instructions}</div>
        </div>
      </div>
    </div>
  );
}
