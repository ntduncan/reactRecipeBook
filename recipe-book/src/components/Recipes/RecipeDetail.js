import React from "react";
import "./RecipeDetail.css"

export default function RecipeDetail() {
  return (
    <div>
      <div className="recipe-detail">
        <div className="recipe-detail__header">
          <div className="category">Meal Type</div>
          <h1>Recipe Title</h1>
        </div>
        <div className="recipe-detail__content">
          <div className="ingredients-list">
            <h3 className="recipe-detail__subheading">Ingredients</h3>
            <ul className="ingredients">
              <li className="ingredient">Bread</li>
              <li className="ingredient">Jelly</li>
              <li className="ingredient">Peanut Butter</li>
              <li className="ingredient">Love</li>
            </ul>
          </div>
          <h3 className="recipe-detail__subheading">Instructions</h3>
          <div className="instructions">
            This is where the instructions go Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis aspernatur facere ut et
            asperiores laudantium amet veniam dignissimos inventore id ipsum
            expedita, similique, beatae odio sit esse? Tempora, ab modi.
          </div>
        </div>
      </div>
    </div>
  );
}
