import { cookBookActionTypes } from "./cook-book.types";

export const addOrRemoveRecipe = (recipe) => ({
  type: cookBookActionTypes.TOGGLE_RECIPE_CARD,
  payload: recipe,
});
