import { createSelector } from "reselect";

const selectCalorieCounter = (state) => state.calorieCounter;

export const selectLoadingState = createSelector(
  [selectCalorieCounter],
  (calorieCounter) => calorieCounter.isLoading
);
export const selectErrorMessageState = createSelector(
  [selectCalorieCounter],
  (calorieCounter) => calorieCounter.errorMessage
);
export const selectFetchedCalorieDataState = createSelector(
  [selectCalorieCounter],
  (calorieCounter) => calorieCounter.calorieData
);
export const selectIsFetchingStarted = createSelector(
  [selectCalorieCounter],
  (calorieCounter) => calorieCounter.isStartedFetching
);
