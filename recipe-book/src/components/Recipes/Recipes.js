import styles from "./Recipes.module.css";
import RecipeItem from "./RecipeItem";

const Recipes = ({ recipes, show, setRecipe, setModal }) => {
	const createRecipeItem = (recipe) => {
		return <RecipeItem recipe={recipe} key={recipe.id} setRecipe={setRecipe} setModal={setModal}></RecipeItem>;
	};

	return (
		<>
			{!show ? (
				<div className={styles.recipes}>
					{recipes.map((recipe) => {
						return createRecipeItem(recipe);
					})}
				</div>
			) : null}
		</>
	);
};

export default Recipes;
