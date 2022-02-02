import React, { useState } from "react";
import { addRecipe } from "../actions";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

const AddRecipeForm = (props) => {
    const { push } = useHistory();

    const [recipe, setRecipe] = useState({
        dish: '',
        background: '',
        ingredients: '',
        instructions: '',
        notes: ''
    })

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addRecipe(recipe)
        push('/recipes');
    }

    const { dish, background, ingredients, instructions, notes } = recipe;
    return (
        <div>
            <h2>Add Recipes Below</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Dish Name: </label>
                    <input value={dish} onChange={handleChange} name='dish' type='text' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Dish Background: </label>
                    <input placeholder='Add a tidbit' value={background} onChange={handleChange} name='background' type='text' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Ingredients: </label>
                    <input value={ingredients} onChange={handleChange} name='ingredients' type='text' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Cooking Instructions: </label>
                    <input value={instructions} onChange={handleChange} name='instructions' type='text' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Additional Notes: </label>
                    <input value={notes} onChange={handleChange} name='notes' type='text' className='form-control'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default connect(null, {addRecipe})(AddRecipeForm);