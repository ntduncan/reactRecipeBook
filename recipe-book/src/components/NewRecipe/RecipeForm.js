import "./RecipeForm.css";
import { useState } from "react";

const RecipeForm = (props) => {
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

    const [enteredMealType, setEnteredMealType] = useState("");
	const mealTypeChangeHandler = (event) => {
		setEnteredMealType(event.target.value);
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
            meal_type: enteredMealType,
		};

        console.log(recipeData);

		// we need to pass this up to parent
		props.onSaveRecipeData(recipeData);

		// set all the values back to empty after submitting the form
		setEnteredTitle("");
		SetEnteredServings("");
		setEnteredIngredients("");
        setEnteredInstructions("");
        setEnteredMealType("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-recipe__controls">
				<div className="new-recipe__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-recipe__control">
					<label>Servings</label>
					<input
						type="text"
						value={enteredServings}
						onChange={servingsChangeHandler}
					/>
				</div>
				<div className="new-recipe__control">
					<label>Ingredients</label>
					<input
						type="text"
						value={enteredIngredients}
						onChange={ingredientsChangeHandler}
					/>
				</div>
                <div className="new-recipe__control">
					<label>Instructions</label>
					<input
						type="text"
						value={enteredInstructions}
						onChange={instructionsChangeHandler}
					/>
				</div>
                {/* meal type will be a drop down list */}
                <div className="new-recipe__control">
					<label>Meal Type</label>
					<input
						type="text"
						value={enteredMealType}
						onChange={mealTypeChangeHandler}
					/>
				</div>
			</div>
			<div className="new-recipe__actions">
				{/* <button type="button" onClick={props.onHideForm}>
					Cancel
				</button> */}
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default RecipeForm;
