import styles from './Recipes.module.css';
import RecipeItem from './RecipeItem';

const Recipes = ({recipes}) => {
    
    const createRecipeItem = (recipe) => {
        return (
            <RecipeItem recipe={recipe} key={recipe.id}></RecipeItem>
        );
    }

    return (
        <div className={styles.recipes}>
            {recipes.map(
                recipe => {
                    return createRecipeItem(recipe);
                }
            )}
        </div>
    );
}

export default Recipes;