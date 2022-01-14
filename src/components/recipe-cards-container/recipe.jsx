import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFetchedRecipes } from "../../store/recipes/recipes";
import RecipeCard from "../cards/recipe-card/recipe";
import { RecipeContainer } from "./recipe";
const RecipeCardContainer = ({ recipes }) => {
  return (
    <RecipeContainer>
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipeData={recipe} />
      ))}
    </RecipeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  recipes: selectFetchedRecipes,
});

export default connect(mapStateToProps)(RecipeCardContainer);
