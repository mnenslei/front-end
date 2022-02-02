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
                                <label>Dish Name: <strong>{recipe.title}</strong></label>
                            </div>
                            <div>
                                <label>Dish Background: <strong>{recipe.background}</strong></label>
                            </div>
                            <div>
                                <label>Ingredients: <strong>{recipe.ingredients}</strong></label>
                            </div>
                            <div>
                                <label>Instructions: <strong>{recipe.instructions}</strong></label>
                            </div>
                            <div>
                                <label>Notes: <strong>{recipe.notes}</strong></label>
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