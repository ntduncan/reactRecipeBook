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
		};

		// we need to pass this up to parent
		props.onSaveNewRecipeData(recipeData);

		// set all the values back to empty after submitting the form
		setEnteredTitle("");
		SetEnteredServings("");
		setEnteredIngredients("");
        setEnteredInstructions("");
        setSelectedMealType("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-recipe__controls">
				<div className="new-recipe__control">
					<label>Title</label><br/>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-recipe__control">
					<label>Servings</label><br/>
					<input
						type="text"
						value={enteredServings}
						onChange={servingsChangeHandler}
					/>
				</div>
				<div className="new-recipe__control">
					<label>Ingredients</label><br/>
					<textarea
                        placeholder="seperate by comma"
						value={enteredIngredients}
						onChange={ingredientsChangeHandler}
					/>
				</div>
                <div className="new-recipe__control">
					<label>Instructions</label><br/>
					<textarea
						value={enteredInstructions}
						onChange={instructionsChangeHandler}
					/>
				</div>
                {/* meal type is a checkbox */}
                <div className="new-recipe__control">
					<label>Meal Type</label><br/>
					<input
						type="checkbox"
						value="breakfast"
                        id="breakfast"
                        name="breakfast"
						onChange={mealTypeChangeHandler}
					/>
                    <label for="breakfast">Breakfast</label><br/>
                    <input
						type="checkbox"
						value="lunch"
                        id="lunch"
                        name="lunch"
						onChange={mealTypeChangeHandler}
					/>
                    <label for="lunch">Lunch</label><br/>
                    <input
						type="checkbox"
						value="dinner"
                        id="dinner"
                        name="dinner"
						onChange={mealTypeChangeHandler}
					/>
                    <label for="dinner">Dinner</label><br/>
                    <input
						type="checkbox"
						value="dessert"
                        id="dessert"
                        name="dessert"
						onChange={mealTypeChangeHandler}
					/>
                    <label for="dessert">Dessert</label><br/>
				</div>
			</div><br/>
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
