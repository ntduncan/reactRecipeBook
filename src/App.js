import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import RecipeDetail from "./components/Recipes/RecipeDetail";
import NewRecipeModal from "./components/Modal/NewRecipeModal";
import RecipeForm from "./components/NewRecipe/RecipeForm";
import axios from 'axios';

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
	image: "https://img.search.brave.com/uytrCprnsf9_6O97h6ISEv6D1ky9BK25OWoJ_G5f9hs/rs:fit:1200:1200:1/g:ce/aHR0cDovL2V2ZXJ5/ZGF5Z291cm1ldC50/di9zdGF0aWMvcHVi/bGljL0VHNV9FUDc5/X1NwYWdoZXR0aS1D/YXJib25hcmEuanBn",
	description: "Spaghetti + Carbonara = Spaghetti Carbonara. Most people have no clue what it is but it is Italian so obviously it is a delicious high carb pile of awesome!"
  },
  {
    id: 2,
    title: "Avacodo Toast",
    servings: 1,
    ingredients: ["1 Toast", "1/2 Avacodo"],
    instructions:
      "Simply add avacodo on top of your toast. If you enjoy your avacado guac style, just mash it.",
	meal_type: ["breakfast"],
	image: "https://img.search.brave.com/qqa3U1aQVb1gBXCChSTqMIedAkTAhERgydC_ycWmNx4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVm/b29kY2FmZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTAvQXZvY2Fkby1U/b2FzdC1XaXRoLUVn/Zy0xMy1jb3B5Lmpw/Zw",
	description: "Avacodo toast is the breakfast of wealthy champions. Less is always more with this minimalist breakfast. It is a boring meal that becomes more exciting with each additional dollar added to your bank account"
  },
  {
    id: 3,
    title: "Apple Pie",
    servings: 5,
    ingredients: [
      "5 Apples",
      "1 Trader Joes Crust",
      "2 Tbsps Cinnimon",
      "6 oz Love",
    ],
    instructions: "Simply put apples on your pie and bake it for 3 hours.",
	meal_type: ["dessert"],
	image: "https://img.search.brave.com/bSTWBBz0jcQxD_eWrC0mz8Tq2-fviJfULZdtCfm_6cE/rs:fit:832:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/bXRwcGpiODNlQlo3/OGdzZVNWTzVRSGFF/TyZwaWQ9QXBp",
	description: "What's more American than baseball and hotdogs? Definitely apple pie, but it is still good way to wrap a Thanksgiving feast or family BBQ"
  },
  {
    id: 4,
    title: "PB&J",
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
	image: "https://img.search.brave.com/b1zsd4n8qRA-JS41TT5P9fXRMAGt2FcDgf6ooafqgbM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bGl0dGxlbm9ydGhl/cm5iYWtlaG91c2Uu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9H/cmlsbGVkLWRlbHV4/ZS1QQkouanBn",
	description: "The most iconic of sandwhiches. If you are reading this recipe you should be ashamed of yourself."
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
	image: "https://img.search.brave.com/qqa3U1aQVb1gBXCChSTqMIedAkTAhERgydC_ycWmNx4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVm/b29kY2FmZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTAvQXZvY2Fkby1U/b2FzdC1XaXRoLUVn/Zy0xMy1jb3B5Lmpw/Zw",
	description: "Avacodo toast is the breakfast of wealthy champions. Less is always more with this minimalist breakfast. It is a boring meal that becomes more exciting with each additional dollar added to your bank account"
  },
  {
    id: 6,
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
	image: "https://img.search.brave.com/qqa3U1aQVb1gBXCChSTqMIedAkTAhERgydC_ycWmNx4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVm/b29kY2FmZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTAvQXZvY2Fkby1U/b2FzdC1XaXRoLUVn/Zy0xMy1jb3B5Lmpw/Zw",
	description: "Avacodo toast is the breakfast of wealthy champions. Less is always more with this minimalist breakfast. It is a boring meal that becomes more exciting with each additional dollar added to your bank account"
  },
];

function App() {
  const [modal, setModal] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [navSelection, setNavSelection] = useState("Recipe Book");
  const Toggle = () => setModal(!modal);

  const [newRecipeModal, setNewRecipeModal] = useState(false);
  const ToggleRecipeModal = () => setNewRecipeModal(!newRecipeModal);

  // add new recipe into the list of recipes
  const saveNewRecipeDataHandler = ({
    title,
    servings,
    ingredients,
    instructions,
    meal_type,
    description
  }) => {
    // define a new arry to store all the ingredients
    const ingredients_array = [];
    // first, split all the ingredients by comma
    const splitted_ingredients = ingredients.split(",");
    // second, trim off all the white space before and after the single ingredient and push it into the new array
    splitted_ingredients.forEach((ingredient) => {
      ingredients_array.push(ingredient.trim());
    });

    // trim off the white space before and after instructions
    instructions = instructions.trim();

    const newRecipeData = {
      id: Math.random().toString(),
      title: title,
      servings: servings,
      ingredients: ingredients_array,
      instructions: instructions,
      meal_type: meal_type,
      image: "https://www.pexels.com/photo/1640777/download/",
      description: description,
    };
    // console.log(newRecipeData);

    // last step, push the organized new recipe data into the recipe list
    recipes.push(newRecipeData);
  };

  return (
    <div>
      <NavBar
        setNavSelection={setNavSelection}
        navSelection={navSelection}
        setNewRecipeModal={setNewRecipeModal}
        toggleModal={ToggleRecipeModal}
      />
      <Modal show={modal} title="My Modal" close={Toggle}>
        <RecipeDetail recipe={recipe} />
      </Modal>

      <NewRecipeModal show={newRecipeModal} close={ToggleRecipeModal}>
        <RecipeForm
          onSaveNewRecipeData={saveNewRecipeDataHandler}
          closeModal={ToggleRecipeModal}
          setNavSelection={setNavSelection}
        ></RecipeForm>
      </NewRecipeModal>

      <Recipes
        recipes={recipes}
        show={modal}
        setRecipe={setRecipe}
        setModal={setModal}
        typeFilter={navSelection.toLowerCase()}
      ></Recipes>
    </div>
  );
}

export default App;
