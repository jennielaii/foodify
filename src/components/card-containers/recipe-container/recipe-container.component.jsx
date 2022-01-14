import { Chip } from "@material-ui/core";
// import { Navigate } from "react-router-dom";
import React from "react";
import { cuisineTypeList } from "../../../constants/cuisineType";
import { dietTypesList } from "../../../constants/dietTypes";
import { tableCells } from "../../../constants/tableCells";
// import { convertToArray } from "../../../utils/convertToArray";
import { ViewRecipeButton } from "../../buttons/buttons.component";
import CustomTable from "../../table/table.component";
import { RecipeName, ResultParagraph } from "../../titles/titles.component";
import {
  ContentWrapper,
  Image,
  IngredientList,
  LabelWrapper,
  ListAndTableWrapper,
  MainContentWrapper,
  RecipeWrapper,
  TableWrapper,
} from "./recipe-container.styles";

const RecipeContainer = ({ recipe }) => {
  const {
    name,
    calories,
    cuisineType,
    dietTypes,
    imageUrl,
    ingredientList,
    totalNutrients,
    recipeUrl,
  } = recipe;
  console.log(dietTypesList);
  return (
    <RecipeWrapper>
      <RecipeName>{name}</RecipeName>
      <MainContentWrapper>
        <Image src={imageUrl} alt={name} />
        <ContentWrapper>
          <LabelWrapper>
            {cuisineType.map((type) => (
              <Chip
                label={cuisineTypeList[type].type}
                color="primary"
                style={{
                  backgroundColor: `${cuisineTypeList[type].color}`,
                }}
              />
            ))}
          </LabelWrapper>
          <LabelWrapper>
            {dietTypes.map((each) => (
              <Chip
                label={dietTypesList[each].name}
                color="primary"
                style={{
                  backgroundColor: `${dietTypesList[each].color}`,
                }}
              />
            ))}
          </LabelWrapper>

          <Chip label={`${calories}kcl`} color="primary" />
          <a href={recipeUrl}>
            <ViewRecipeButton />
          </a>
        </ContentWrapper>
      </MainContentWrapper>
      <ListAndTableWrapper>
        <TableWrapper>
          <ResultParagraph>Nutrients Information</ResultParagraph>

          <CustomTable
            rows={totalNutrients}
            cells={tableCells}
            labelName="label"
            quantityName="quantity"
            unitName="unit"
          />
        </TableWrapper>
        <IngredientList>
          <ResultParagraph>Ingredients</ResultParagraph>
          {ingredientList.map((item) => (
            <li>{item}</li>
          ))}
        </IngredientList>
      </ListAndTableWrapper>
    </RecipeWrapper>
  );
};

export default (RecipeContainer);
