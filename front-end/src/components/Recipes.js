import React from "react";
import { connect } from "react-redux";

import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
    const { recipes } = props;

    return (
        <div className='col'>
            <table>
                <tr>
                    <th>Dish Name</th>
                    <th>Dish Background</th>
                    <th>Additional Notes</th>
                </tr>

                <tbody>
                    {
                        recipes.map(recipe=><RecipeItem key={recipe.id} recipe={recipe}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        recipes: state.recipes
    }
}
export default connect (mapStateToProps)(Recipes);