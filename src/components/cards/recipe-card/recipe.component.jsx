import { CardContent, Chip } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { cuisineTypeList } from "../../../constants/cuisineType";
import { addOrRemoveRecipe } from "../../../store/cook-book/cook-book.actions";
import { selectIsInTheCookBook } from "../../../store/cook-book/cook-book.selectors";
import { AddRemoveButton, ViewButton } from "../../buttons/buttons.component";
import CustomCard from "../../custom-card/custom.card.component";
import CustomTitle from "../../custom-title/custom-title.component";
import {
  ButtonGrp,
  ChipGrp,
  RecipeContent,
  RecipeImage,
  useStyles,
} from "./recipe.styles";

const RecipeCard = ({ recipeData, toggle, history, isIntheCookBook }) => {
  const { name, calories, cuisineType, imageUrl } = recipeData;

  const classes = useStyles();

  return (
    <CustomCard>
      <CardContent className={classes.root}>
        <RecipeContent>
          <RecipeImage src={imageUrl} alt={name} />
          <CustomTitle color="primary" variant="h6">
            {name}
          </CustomTitle>
          <CustomTitle color="primary" variant="h6">
            Calories : {calories}kcl
          </CustomTitle>
        </RecipeContent>
        <ChipGrp>
          {cuisineType.map((each) => (
            <Chip
              key={each}
              label={cuisineTypeList[each].type}
              color="primary"
              style={{
                backgroundColor: `${cuisineTypeList[each].color}`,
              }}
            />
          ))}
        </ChipGrp>
        <ButtonGrp>
          <ViewButton onClick={() => history.push(`/recipe/${name}`)} />
          <AddRemoveButton onClick={() => toggle(recipeData)}>
            {isIntheCookBook ? "Remove" : "Add"}
          </AddRemoveButton>
        </ButtonGrp>
      </CardContent>
    </CustomCard>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggle: (recipe) => dispatch(addOrRemoveRecipe(recipe)),
});

const mapStateToProps = (state, ownProps) => ({
  isIntheCookBook: selectIsInTheCookBook(ownProps.recipeData.name)(state),
});

export default (
  connect(mapStateToProps, mapDispatchToProps)(RecipeCard)
);
