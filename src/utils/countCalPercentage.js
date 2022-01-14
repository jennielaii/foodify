import { calorieContent } from "../constants/calorieContent";

export const countCaloriePercentage = (
  totalCal,
  carboAmount,
  fatAmount,
  proteinAmount
) => {
  const { carbo, protein, fat } = calorieContent;
  const carboPercentage = Math.round(
    ((carbo.cal * carboAmount) / totalCal) * 100
  );
  const proteinPercentage = Math.round(
    ((protein.cal * proteinAmount) / totalCal) * 100
  );
  const fatPercentage = Math.round(((fat.cal * fatAmount) / totalCal) * 100);

  return [
    { name: "carbo", quantity: carboPercentage },
    { name: "protein", quantity: proteinPercentage },
    { name: "fat", quantity: fatPercentage },
  ];
};

export const mealReview = (nutrients) => {
  const { carbo, protein, fat } = calorieContent;
  let carboReview;
  let fatReview;
  let proteinReview;
  let carboMood;
  let fatMood;
  let proteinMood;

  nutrients.forEach((item) => {
    if (item.name === "carbo") {
      if (item.quantity >= carbo.min && item.quantity <= carbo.max) {
        carboReview = "Carbohydrate amount is balanced";
        carboMood = "good";
      }
      if (item.quantity < carbo.min) {
        carboReview = "Carbohydrate amount is low";
        carboMood = "bad";
      }
      if (item.quantity > carbo.max) {
        carboReview = "Carbohydrate amount is high";
        carboMood = "bad";
      }
    }
    if (item.name === "protein") {
      if (item.quantity >= protein.min && item.quantity <= protein.max) {
        fatReview = "Protein amount is balanced";
        fatMood = "good";
      }
      if (item.quantity < protein.min) {
        fatReview = "Protein amount is low";
        fatMood = "bad";
      }
      if (item.quantity > protein.max) {
        fatReview = "Protein amount is high";
        fatMood = "bad";
      }
    }
    if (item.name === "fat") {
      if (item.quantity >= fat.min && item.quantity <= fat.max) {
        proteinReview = "Fat amount is balanced";
        proteinMood = "good";
      }
      if (item.quantity < fat.min) {
        proteinReview = "Fat amount is low";
        proteinMood = "bad";
      }
      if (item.quantity > fat.max) {
        proteinReview = "Fat amount is high";
        proteinMood = "bad";
      }
    }
  });

  return {
    carboReview,
    fatReview,
    proteinReview,
    carboMood,
    fatMood,
    proteinMood,
  };
};
