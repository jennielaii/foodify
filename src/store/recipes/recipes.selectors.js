import { createSelector } from "reselect";

const selectRecipes = (state) => state.recipes;

export const selectFetchedRecipes = createSelector(
  [selectRecipes],
  (recipes) => recipes.fetchedRecipes
);
export const selectLoadingStatus = createSelector(
  [selectRecipes],
  (recipes) => recipes.isLoading
);
export const selectErrorMessage = createSelector(
  [selectRecipes],
  (recipes) => recipes.errorMessage
);
export const selectFetchedStarted = createSelector(
  [selectRecipes],
  (recipes) => recipes.isStartedToFetch
);
