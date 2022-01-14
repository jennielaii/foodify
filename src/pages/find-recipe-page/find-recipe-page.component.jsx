import React from "react";
import FindRecipeForm from "../../components/find-recipe-form/find-recipe-form.component";
import { RecipePageContainer } from "./find-recipe-form.styles";
import RecipeCardContainer from "../../components/card-containers/recipe-container/recipe-container.component";
import { FindRecipeTitle } from "../../components/titles/titles.component";
import { createStructuredSelector } from "reselect";
import {
  selectFetchedRecipes,
  selectFetchedStarted,
  selectLoadingStatus,
} from "../../store/recipes/recipes.selectors";
import { connect } from "react-redux";
import withSpinner from "../../hoc/withSpinner";
import EmptyMessage from "../../components/empty-message/empty-message.component";
const DisplayRecipesWithSpinner = withSpinner(RecipeCardContainer);
const FindRecipePage = ({ isStarted, isFetching, recipeData }) => {
  return (
    <RecipePageContainer>
      <FindRecipeTitle />
      <FindRecipeForm />
      <DisplayRecipesWithSpinner
        isLoading={isFetching}
        isStartedFetching={isStarted}
      />
      {!recipeData && (
        <EmptyMessage>You Haven't found any Recipes yet!</EmptyMessage>
      )}
    </RecipePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectLoadingStatus,
  isStarted: selectFetchedStarted,
  recipeData: selectFetchedRecipes,
});

export default connect(mapStateToProps)(FindRecipePage);
