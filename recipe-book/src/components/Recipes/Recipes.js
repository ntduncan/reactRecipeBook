import './Recipes.css';
import RecipeItem from './RecipeItem';

const Recipes = ({recipes}) => {
    
    const createRecipeItem = (recipe) => {
        return (
            <RecipeItem recipe={recipe} key={recipe.id}></RecipeItem>
        );
    }

    return (
        <div>
            Recipes Component.
            {recipes.map(
                recipe => {
                    return createRecipeItem(recipe);
                }
            )}
        </div>
    );
}

export default Recipes;