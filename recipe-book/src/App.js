import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import RecipeDetail from './components/Recipes/RecipeDetail';

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
		meal_type: ["lunch", "dinner"],
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
	const Toggle = () => setModal(!modal);

	return (
		<div>
			<button className="clickme" onClick={() => Toggle()}>My Modal Popup</button>
			<NavBar />
			<Modal show={modal} title="My Modal" close={Toggle}>
				<RecipeDetail recipe={recipe} />
			</Modal>

			<Recipes recipes={recipes} show={modal} setRecipe={setRecipe} setModal={setModal}></Recipes>
		</div>
	);
}

export default App;
