import { convertToArray } from "../../utils/convertToArray";

export const formatFetchedData = (data) => {
  const { totalNutrients, calories, totalWeight } = data;
  const totalNutrientsArray = convertToArray(totalNutrients);
  const nutrients = totalNutrientsArray.map((each) => {
    const { label, quantity, unit } = each;
    const formatedQuantity = quantity.toFixed(4);
    const formatedLabel = label.split(",")[0];
    return {
      formatedLabel,
      formatedQuantity,
      unit,
    };
  });

  return {
    calories,
    totalWeight,
    nutrients,
  };
};
