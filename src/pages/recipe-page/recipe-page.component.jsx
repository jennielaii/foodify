import React from "react";
import { connect } from "react-redux";
import RecipeContainer from "../../components/card-containers/recipe-container/recipe-container.component";
import EmptyMessage from "../../components/empty-message/empty-message.component";
import { selectSpecificRecipeCard } from "../../store/cook-book/cook-book.selectors";
import { RecipePageWrapper } from "./recipe-page.styles";

const RecipePage = ({ match, recipe }) => {
  return (
    <RecipePageWrapper>
      {recipe ? (
        <RecipeContainer recipe={recipe} />
      ) : (
        <EmptyMessage>No Result found</EmptyMessage>
      )}
    </RecipePageWrapper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: selectSpecificRecipeCard(ownProps.match.params.recipeName)(state),
});

export default connect(mapStateToProps)(RecipePage);
