export const DELETE_RECIPE = "DELETE_RECIPE";
export const ADD_RECIPE = 'ADD_RECIPE'

export const deleteRecipe = (id) => {
    return({type: DELETE_RECIPE, payload:id});
}

export const addRecipe = (recipe) => {
    return({type: ADD_RECIPE, payload:recipe});
}