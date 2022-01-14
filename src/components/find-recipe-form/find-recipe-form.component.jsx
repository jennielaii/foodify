import React from "react";
import {
  MealTypesForm,
  InputField,
} from "../input-fields/input-fields.component";

import SearchIcon from "@material-ui/icons/Search";
import CustomIconButton from "../custom-icon-button/custom-icon-button.component";
import { Form, useStylesForForm } from "./find-recipe-form.styles";
import useTextFieldValidate from "../../effects/useTextFieldValidate";
import { startFetchingRecipesAsync } from "../../store/recipes/recipes.actions";
import { connect } from "react-redux";

const FindRecipeForm = ({ requestRecipes }) => {
  const {
    value: recipeName,
    reset: recipeNameReset,
    hasError: recipeNameHasError,
    valueChangeHandler: recipeNameChangeHandler,
    isValid: recipeNameIsValid,
    onBlur: recipeNameBlurHandler,
  } = useTextFieldValidate();

  const {
    value: mealType,
    reset: mealTypeReset,
    hasError: mealTypeHasError,
    valueChangeHandler: mealTypeChangeHandler,
    isValid: mealTypeIsValid,
    onBlur: mealTypeBlurHandler,
  } = useTextFieldValidate();

  const formOnSubmitHandler = (e) => {
    e.preventDefault();

    if (!recipeNameIsValid || !mealTypeIsValid) return;

    requestRecipes(mealType, recipeName);

    mealTypeReset();
    recipeNameReset();
  };

  const classes = useStylesForForm();

  return (
    <Form onSubmit={formOnSubmitHandler}>
      <InputField
        className={classes.searchField}
        id="recipe-search"
        type="text"
        label="Recipe Name"
        color="secondary"
        value={recipeName}
        onChange={recipeNameChangeHandler}
        error={recipeNameHasError}
        onBlur={recipeNameBlurHandler}
      />
      <MealTypesForm
        className={classes.mealtypeField}
        id="meal-type"
        label="Meal type"
        color="secondary"
        value={mealType}
        onChange={mealTypeChangeHandler}
        error={mealTypeHasError}
        onBlur={mealTypeBlurHandler}
      />
      <CustomIconButton
        ariaLabel="search"
        color="secondary"
        variant="contained"
        type="submit"
      >
        <SearchIcon fontSize="large" />
      </CustomIconButton>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  requestRecipes: (mealType, recipeName) =>
    dispatch(startFetchingRecipesAsync({ mealType, recipeName })),
});

export default connect(null, mapDispatchToProps)(FindRecipeForm);
