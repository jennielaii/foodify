import { recipeActionTypes } from "./recipes.types";
import { formatRecipeData } from "./recipes.utils";

const INITIAL_STATE = {
  fetchedRecipes: null,
  isLoading: false,
  isStartedToFetch: false,
  errorMessage: "",
};

export const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case recipeActionTypes.START_FETCHING_RECIPES:
      return {
        ...state,
        isLoading: true,
        isStartedToFetch: true,
      };
    case recipeActionTypes.SUCCESS_FETCHING_RECIPES:
      return {
        ...state,
        isLoading: false,
        isStartedToFetch: false,
        fetchedRecipes: formatRecipeData(action.payload),
      };
    case recipeActionTypes.FAIL_FETCHING_RECIPES:
      return {
        ...state,
        isLoading: false,
        isStartedToFetch: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
