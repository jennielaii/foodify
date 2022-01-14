import { calorieContent } from "../constants/calorieContent";

export const calculateTotalCalories = (carboQ, proteinQ, fatQ) => {
  const { carbo, protein, fat } = calorieContent;
  const total = carboQ * carbo.cal + proteinQ * protein.cal + fatQ * fat.cal;

  return total;
};
