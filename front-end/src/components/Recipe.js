import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import { deleteRecipe } from '../actions'


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { recipes, deleteRecipe } = props;
    const recipe = recipes.find(recipe=>recipe.id===Number(id));
    console.log(recipe)

    const handleDelete = () => {
        deleteRecipe(recipe.id);
        push('/recipes');
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{recipe.dish} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="recipe-details">
                            <div>
                                <label><strong>Dish Name:</strong> {recipe.dish}</label>
                            </div>
                            <div>
                                <label><strong>Dish Background:</strong> {recipe.background}</label>
                            </div>
                            <div className='ingredients'>
                                <label><strong>Ingredients:</strong> {recipe.ingredients}</label>
                            </div>
                            <div>
                                <label><strong>Instructions:</strong> {recipe.instructions}</label>
                            </div>
                            <div>
                                <label><strong>Notes:</strong> {recipe.notes}</label>
                            </div>
                        </section>
                        
                        <section>
                            <span className="delete" onClick={handleDelete} ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { deleteRecipe })(Movie);