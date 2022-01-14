import { calculateTotalCalories } from "../../utils/calculateTotalCalories";
import {
  countCaloriePercentage,
  mealReview,
} from "../../utils/countCalPercentage";

export const addMealCardsUtil = (list, newCard) => {
  const { date, mealType, carbo, fat, protein } = newCard;

  const totalCal = calculateTotalCalories(+carbo, +protein, +fat);
  const calPercentage = countCaloriePercentage(
    totalCal,
    +carbo,
    +fat,
    +protein
  );
  const mealReviews = mealReview(calPercentage);

  const {
    carboReview,
    fatReview,
    proteinReview,
    carboMood,
    fatMood,
    proteinMood,
  } = mealReviews;

  return [
    {
      id: Math.trunc(Math.random() * 1000),
      date,
      mealType,
      totalCal,
      nutrients: [
        {
          name: "Carbohydrate",
          grams: carbo,
          percentage: calPercentage[0].quantity,
          review: carboReview,
          mood: carboMood,
        },
        {
          name: "Protein",
          grams: protein,
          percentage: calPercentage[1].quantity,
          review: proteinReview,
          mood: proteinMood,
        },
        {
          name: "Fat",
          grams: fat,
          percentage: calPercentage[2].quantity,
          review: fatReview,
          mood: fatMood,
        },
      ],
    },
    ...list,
  ];
};

export const removeMealCardUtil = (list, card) => {
  const existingItem = list.find((each) => each.id === card.id);

  if (!existingItem) return;

  return list.filter((each) => each.id !== existingItem.id);
};

export const updateMealCardUtil = (list, card) => {
  const existingItem = list.findIndex((each) => each.id === card.id);
  const { id, date, mealType, carbo, fat, protein } = card;
  console.log(list);
  console.log(existingItem);

  const totalCal = calculateTotalCalories(+carbo, +protein, +fat);
  const calPercentage = countCaloriePercentage(
    totalCal,
    +carbo,
    +fat,
    +protein
  );

  const mealReviews = mealReview(calPercentage);

  const {
    carboReview,
    fatReview,
    proteinReview,
    carboMood,
    fatMood,
    proteinMood,
  } = mealReviews;

  const updatedListItem = {
    id: id,
    date,
    mealType,
    totalCal,
    nutrients: [
      {
        name: "Carbohydrate",
        grams: carbo,
        percentage: calPercentage[0].quantity,
        review: carboReview,
        mood: carboMood,
      },
      {
        name: "Protein",
        grams: protein,
        percentage: calPercentage[1].quantity,
        review: proteinReview,
        mood: proteinMood,
      },
      {
        name: "Fat",
        grams: fat,
        percentage: calPercentage[2].quantity,
        review: fatReview,
        mood: fatMood,
      },
    ],
  };

  const updatedArray = [...list];
  updatedArray[existingItem] = updatedListItem;

  return updatedArray;
};
