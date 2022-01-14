import { convertToArray } from "../../utils/convertToArray";

export const formatRecipeData = (recipes) => {
  return recipes.map((recipe) => {
    const {
      label,
      calories,
      cuisineType,
      dietLabels,
      image,
      ingredientLines,
      totalNutrients,
      url,
    } = recipe.recipe;

    const updatedCalories = Math.round(calories);
    const nutrients = convertToArray(totalNutrients);
    const updatedNutrients = nutrients.map((each) => {
      return {
        label: each.label,
        quantity: Math.round(each.quantity),
        unit: each.unit,
      };
    });

    return {
      id: label,
      name: label,
      calories: updatedCalories,
      cuisineType,
      dietTypes: dietLabels,
      imageUrl: image,
      ingredientList: ingredientLines,
      totalNutrients: updatedNutrients,
      recipeUrl: url,
    };
  });
};
