import "./RecipeForm.css";
import { useState } from "react";

const RecipeForm = ({ onSaveNewRecipeData, closeModal, setNavSelection }) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	// when the change event occurs, we automatically get the "event"
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const [enteredServings, SetEnteredServings] = useState("");
	const servingsChangeHandler = (event) => {
		SetEnteredServings(event.target.value);
	};

	const [enteredIngredients, setEnteredIngredients] = useState("");
	const ingredientsChangeHandler = (event) => {
		setEnteredIngredients(event.target.value);
	};

	const [enteredInstructions, setEnteredInstructions] = useState("");
	const instructionsChangeHandler = (event) => {
		setEnteredInstructions(event.target.value);
	};

	const [enteredDescription, setEnteredDescription] = useState("");
	const descriptionChangeHandler = (event) => {
		setEnteredDescription(event.target.value);
	};

	const allSelectedMealTypes = [];
	const [selectedMealType, setSelectedMealType] = useState("");
	const mealTypeChangeHandler = (event) => {
		allSelectedMealTypes.push(event.target.value);
	};

	const submitHandler = (event) => {
		// prevent the form from being sending to the server, so the page will NOT be reloaded
		event.preventDefault();

		// handle it by using js here
		const recipeData = {
			title: enteredTitle,
			servings: enteredServings,
			ingredients: enteredIngredients,
			instructions: enteredInstructions,
			meal_type: allSelectedMealTypes,
			description: enteredDescription
		};

		// we need to pass this up to parent
		onSaveNewRecipeData(recipeData);

		// set all the values back to empty after submitting the form
		setEnteredTitle("");
		SetEnteredServings("");
		setEnteredIngredients("");
		setEnteredInstructions("");
		setSelectedMealType("");
		setEnteredDescription("");

		// close the modal
		closeModal();
		// set it back to the All page
		setNavSelection("Recipe Book");
	};

	// when user click on the "Cancel" button, close the modal
	const closeModalHandler = () => {
		// close the modal
		closeModal();
		// set it back to the All page
		setNavSelection("Recipe Book");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-recipe__controls">
				<div className="new-recipe__control">
					<label>Title</label>
					<br />
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
						required
					/>
				</div>
				<div className="new-recipe__control">
					<label>Servings</label>
					<br />
					<input
						type="text"
						value={enteredServings}
						onChange={servingsChangeHandler}
						required
					/>
				</div>
				<div className="new-recipe__control">
					<label>Description</label>
					<br />
					<textarea
						value={enteredDescription}
						onChange={descriptionChangeHandler}
						required
					/>
				</div>
				<div className="new-recipe__control">
					<label>Ingredients</label>
					<br />
					<textarea
						placeholder="seperate ingredients by comma"
						value={enteredIngredients}
						onChange={ingredientsChangeHandler}
						required
					/>
				</div>
				<div className="new-recipe__control">
					<label>Instructions</label>
					<br />
					<textarea
						value={enteredInstructions}
						onChange={instructionsChangeHandler}
						required
					/>
				</div>
				{/* meal type is a checkbox */}
				<div className="new-recipe__control">
					<label>Meal Type</label>
					<br />
					<input
						type="checkbox"
						value="breakfast"
						id="breakfast"
						name="breakfast"
						onChange={mealTypeChangeHandler}
					/>
					<label for="breakfast">Breakfast</label>
					<br />
					<input
						type="checkbox"
						value="lunch"
						id="lunch"
						name="lunch"
						onChange={mealTypeChangeHandler}
					/>
					<label for="lunch">Lunch</label>
					<br />
					<input
						type="checkbox"
						value="dinner"
						id="dinner"
						name="dinner"
						onChange={mealTypeChangeHandler}
					/>
					<label for="dinner">Dinner</label>
					<br />
					<input
						type="checkbox"
						value="dessert"
						id="dessert"
						name="dessert"
						onChange={mealTypeChangeHandler}
					/>
					<label for="dessert">Dessert</label>
					<br />
				</div>
			</div>
			<br />
			<div className="new-recipe__actions">
				<button type="button" onClick={closeModalHandler}>
					Cancel
				</button>
				<button type="submit">Add Recipe</button>
			</div>
		</form>
	);
};

export default RecipeForm;
