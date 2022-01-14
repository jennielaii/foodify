import { createSelector } from "reselect";
import { selectFetchedRecipes } from "../recipes/recipes.selectors";

const selectCookBook = (state) => state.cookbook;

export const selectCookBookList = createSelector(
  [selectCookBook],
  (cookBook) => cookBook.cookBookList
);

export const selectCookBookCount = createSelector(
  [selectCookBookList],
  (cookBookList) => cookBookList.length
);

//select the request recipe from cook book or from the fetched recipe
export const selectSpecificRecipeCard = (recipeNameUrlParam) =>
  createSelector(
    [selectCookBookList, selectFetchedRecipes],
    (cookBookList, fetchedRecipes) => {
      const recipe = cookBookList?.find(
        (item) => item.id === recipeNameUrlParam
      );

      if (!recipe) {
        return fetchedRecipes?.find((item) => item.id === recipeNameUrlParam);
      }

      return recipe;
    }
  );
export const selectIsInTheCookBook = (recipeName) =>
  createSelector([selectCookBookList], (cookBookList) => {
    const recipe = cookBookList?.find((item) => item.id === recipeName);
    if (!recipe) {
      return false;
    }

    return true;
  });