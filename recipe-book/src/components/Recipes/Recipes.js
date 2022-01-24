import styles from "./Recipes.module.css";
import RecipeItem from "./RecipeItem";

const Recipes = ({ recipes, show }) => {
	const createRecipeItem = (recipe) => {
		return <RecipeItem recipe={recipe} key={recipe.id}></RecipeItem>;
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
