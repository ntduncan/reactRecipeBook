import "./RecipeItem.css";

const RecipeItem = ({ recipe, setRecipe, setModal }) => {
	console.log(recipe);

	return (
		<div className="column recipeItem" onClick={() => {setRecipe(recipe); setModal(true)}}>
			{/* <div className="demo-title">Normal</div> */}
			<div className="post-module">
				<div className="post-content">
					<div className="category">
						{recipe.meal_type.map((type) => {
							return type + " ";
						})}
					</div>
					<h1 className="title">{recipe.title}</h1>
					<h2 className="sub_title">Servings: {recipe.servings}</h2>
					<h3>Instructions: </h3>
					<p className="description">{recipe.instructions}</p>
					<h3>Ingredients: </h3>
					<p className="description">
						{recipe.ingredients.map((ingredient) => {
							return ingredient + ", ";
						})}
					</p>
					{/* <div className="post-meta">
						<span className="timestamp">
							<i className="fa fa-clock-">o</i> 6 mins ago
						</span>
						<span className="comments">
							<i className="fa fa-comments"></i>
							<a href="#"> 39 comments</a>
						</span>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default RecipeItem;
