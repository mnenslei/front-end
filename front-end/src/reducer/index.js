import { ADD_RECIPE, DELETE_RECIPE } from '../actions'
import recipes from '../data'

const initialState = {
    recipes: recipes
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_RECIPE:
            return {
                ...state, 
                recipes: state.recipes.filter(item=>(action.payload !== item.id))
            }
        case ADD_RECIPE:
            const newRecipe = {
                ...action.payload,
                id: Date.now()
            }
            return {
                ...state,
                recipes: [...state.recipes, newRecipe]
            }
        default:
            return state;
    }
}

export default reducer;