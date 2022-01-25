import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import RecipeDetail from './components/Recipes/RecipeDetail';
import NewRecipeModal from "./components/Modal/NewRecipeModal";
import RecipeForm from "./components/NewRecipe/RecipeForm";

// dummy data
const recipes = [
	{
		id: 1,
		title: "Spaghetti Carbonara",
		servings: 2,
		ingredients: [
			"1 lb spaghetti",
			"3.5 oz pancetta",
			"2 Tbsps olive oil",
			"1  egg",
			"0.5 cup parmesan cheese",
		],
		instructions:
			"Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ",
		meal_type: ["lunch", "dinner"],
	},
	{
		id: 2,
		title: "Avacodo Toast",
		servings: 1,
		ingredients: [
			"1 lb spaghetti",
			"3.5 oz pancetta",
			"2 Tbsps olive oil",
			"1  egg",
			"0.5 cup parmesan cheese",
		],
		instructions:
			"Simply add avacodo on top of your toast. If you enjoy your avacado guac style, just mash it.",
		meal_type: ["breakfast"],
	},
	{
		id: 3,
		title: "Apple Pie",
		servings: 5,
		ingredients: [
			"1 lb spaghetti",
			"3.5 oz pancetta",
			"2 Tbsps olive oil",
			"1  egg",
			"0.5 cup parmesan cheese",
		],
		instructions: "Simply put apples on your pie and bake it for 3 hours.",
		meal_type: ["dessert"],
	},
	{
		id: 4,
		title: "Spaghetti Carbonara",
		servings: 2,
		ingredients: [
			"1 lb spaghetti",
			"3.5 oz pancetta",
			"2 Tbsps olive oil",
			"1  egg",
			"0.5 cup parmesan cheese",
		],
		instructions:
			"Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ",
		meal_type: ["lunch"],
	},
	{
		id: 5,
		title: "Avacodo Toast",
		servings: 1,
		ingredients: [
			"1 lb spaghetti",
			"3.5 oz pancetta",
			"2 Tbsps olive oil",
			"1  egg",
			"0.5 cup parmesan cheese",
		],
		instructions:
			"Simply add avacodo on top of your toast. If you enjoy your avacado guac style, just mash it.",
		meal_type: ["breakfast"],
	},
];

function App() {

	const [modal, setModal] = useState(false);
	const [recipe, setRecipe] = useState('');
	const [navSelection, setNavSelection] = useState("Recipe Book");
	const Toggle = () => setModal(!modal);

	const [newRecipeModal, setNewRecipeModal] = useState(false);
	const ToggleRecipeModal = () => setNewRecipeModal(!newRecipeModal);

	// add new recipe into the list of recipes
	const saveNewRecipeDataHandler = ({title, servings, ingredients, instructions, meal_type}) => {
		// define a new arry to store all the ingredients
		const ingredients_array = [];
		// first, split all the ingredients by comma
		const splitted_ingredients = ingredients.split(",");
		// second, trim off all the white space before and after the single ingredient and push it into the new array
		splitted_ingredients.forEach(ingredient => {
			ingredients_array.push(ingredient.trim())
		});

		// trim off the white space before and after instructions
		instructions = instructions.trim();

		const newRecipeData = {id: Math.random().toString(), title: title, servings: servings, ingredients: ingredients_array, instructions: instructions, meal_type: meal_type}
		// console.log(newRecipeData);

		// last step, push the organized new recipe data into the recipe list
		recipes.push(newRecipeData);
	}

	return (
		<div>
			<NavBar setNavSelection={setNavSelection} navSelection={navSelection} setNewRecipeModal={setNewRecipeModal} toggleModal={ToggleRecipeModal}/>
			<Modal show={modal} title="My Modal" close={Toggle}>
				<RecipeDetail recipe={recipe} />
			</Modal>

			<NewRecipeModal show={newRecipeModal} close={ToggleRecipeModal}>
				<RecipeForm onSaveNewRecipeData={saveNewRecipeDataHandler} closeModal={ToggleRecipeModal} setNavSelection={setNavSelection}></RecipeForm>
			</NewRecipeModal>

			<Recipes recipes={recipes} show={modal} setRecipe={setRecipe} setModal={setModal} typeFilter={navSelection.toLowerCase()}></Recipes>
		</div>
	);
}

export default App;
