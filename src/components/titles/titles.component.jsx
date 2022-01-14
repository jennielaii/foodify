import React from "react";
import { useFindRecipeTitle } from "../../pages/find-recipe-page/find-recipe-form.styles";
import CustomTitle from "../custom-title/custom-title.component";

export const CalorieCounterTitle = () => {
  const classes = useFindRecipeTitle();
  return (
    <CustomTitle
      className={classes.title}
      color="primary"
      align="center"
      variant="h6"
      component="h2"
      paragraph
    >
      Would you like to know the Nutrition content of what you eat? Give it a
      try! Give the food name and the Quantity to find out.
    </CustomTitle>
  );
};
export const RecipeName = ({ children }) => {
  const classes = useFindRecipeTitle();
  return (
    <CustomTitle
      className={classes.title}
      color="primary"
      align="center"
      variant="h6"
      component="h2"
      paragraph
    >
      {children}
    </CustomTitle>
  );
};
export const CookBookTitle = () => {
  const classes = useFindRecipeTitle();
  return (
    <CustomTitle
      className={classes.title}
      color="primary"
      align="center"
      variant="h6"
      component="h2"
      paragraph
    >
      You can find all your favourite recipes here.
    </CustomTitle>
  );
};

export const FindRecipeTitle = () => {
  const classes = useFindRecipeTitle();
  return (
    <CustomTitle
      className={classes.title}
      color="primary"
      align="center"
      variant="h6"
      component="h2"
      paragraph
    >
      Search for any recipe you like! we have hundreds of healthy recipes just
      for you. Select the meal type and search by recipe name and you are good
      to go!!!
    </CustomTitle>
  );
};
export const ErrorMessage = ({ children }) => {
  const classes = useFindRecipeTitle();
  return (
    <CustomTitle
      className={classes.title}
      color="primary"
      align="center"
      variant="h6"
      component="p"
      paragraph
    >
      {children}
    </CustomTitle>
  );
};
export const ResultParagraph = ({ children }) => {
  const classes = useFindRecipeTitle();
  return (
    <CustomTitle
      className={classes.title}
      color="primary"
      align="center"
      variant="h6"
      component="p"
      paragraph
    >
      {children}
    </CustomTitle>
  );
};
