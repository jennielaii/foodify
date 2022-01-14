import { RECIPE_DATA } from "../../config/api";
import { fetchData } from "../../utils/fetchData";
import { recipeActionTypes } from "./recipes.types";

export const fetchRecipesStarted = () => ({
  type: recipeActionTypes.START_FETCHING_RECIPES,
});
export const fetchRecipesSuccees = (fetchedData) => ({
  type: recipeActionTypes.SUCCESS_FETCHING_RECIPES,
  payload: fetchedData,
});
export const fetchRecipesFailed = (errorMessage) => ({
  type: recipeActionTypes.FAIL_FETCHING_RECIPES,
  payload: errorMessage,
});

export const startFetchingRecipesAsync = ({ mealType, recipeName }) => {
  return async (dispatch) => {
    const url = `${RECIPE_DATA}${mealType}&q=${recipeName}`;
    try {
      dispatch(fetchRecipesStarted());
      const response = await fetchData(url);
      console.log(response.hits);
      dispatch(fetchRecipesSuccees(response.hits));
    } catch (error) {
      dispatch(fetchRecipesFailed(error.message));
    }
  };
};
