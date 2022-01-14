import { createSelector } from "reselect";

const selectMealDiary = (state) => state.mealDiary;

export const selectIsModalOpen = createSelector(
  [selectMealDiary],
  (mealDiary) => mealDiary.modalOpen
);
export const selectMealCards = createSelector(
  [selectMealDiary],
  (mealDiary) => mealDiary.mealCards
);

export const selectMealCardCount = createSelector(
  [selectMealCards],
  (mealCards) => mealCards.length
);
