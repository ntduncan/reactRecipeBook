import styles from "./Recipes.module.css";
import RecipeItem from "./RecipeItem";

const Recipes = ({ recipes, show, setRecipe, setModal, typeFilter }) => {
	const createRecipeItem = (recipe) => {
		return <RecipeItem recipe={recipe} key={recipe.id} setRecipe={setRecipe} setModal={setModal}></RecipeItem>;
	};

	return (
		<>
			{!show ? (
				
				 <div className={styles.recipes}>
					{recipes.map((recipe) => {
						if(typeFilter === 'recipe book' || typeFilter === 'all' || recipe.meal_type.includes(typeFilter)) return createRecipeItem(recipe);
					})}
				</div>

			) : null}
		</>
	);
};

export default Recipes;
