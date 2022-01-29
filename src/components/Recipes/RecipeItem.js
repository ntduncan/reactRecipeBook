import "./RecipeItem.css";

const RecipeItem = ({ recipe, setRecipe, setModal, typeFilter }) => {
  const getBackgoundColorHex = () => {
    switch (typeFilter) {
      case "all":
        return "#FF847C";
      case "breakfast":
        return "#99B898";
      case "lunch":
        return "#FECEAB";
      case "dinner":
        return "#FF847C";
      case "dessert":
        return "#E84A5F";
      default:
        return "";
    }
  };

//   const getTextColorHex = () => {
//     switch (typeFilter) {
//       case "recipe book":
//         return "#FECEAB";
//       case "breakfast":
//         return "#FF847C";
//       case "lunch":
//         return "#E84A5F";
//       case "dinner":
//         return "#99B898";
//       case "dessert":
//         return "#FECEAB";
//     }
//   };

  return (
    <div
      className="column recipeItem"
      onClick={() => {
        setRecipe(recipe);
        setModal(true);
      }}
    >
      <div className="post-module">
        <div className="post-content">
          <div
            className="category"
            style={{ backgroundColor: getBackgoundColorHex() }}
          >
            {recipe.meal_type.map((type) => {
              return type + " ";
            })}
          </div>
          <h1 className="title">{recipe.title}</h1>
          {/* <h2 className="sub_title" style={{ color: getTextColorHex() }}>
            Servings: {recipe.servings}
          </h2> */}
          <h3>Description: </h3>
          <p className="description">{recipe.description}</p>
          <h3>Ingredients: </h3>
          <p className="description">
            {recipe.ingredients.map((ingredient) => {
              return ingredient + ", ";
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
