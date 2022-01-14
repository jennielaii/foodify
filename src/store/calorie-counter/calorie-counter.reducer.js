import { calorieCounterActionTypes } from "./calorie-counter.types";
import { formatFetchedData } from "./calorie-counter.utils";

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: null,
  calorieData: null,
  isStartedFetching: false,
};

export const calorieCounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case calorieCounterActionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true,
        isStartedFetching: true,
      };
    case calorieCounterActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isStartedFetching: false,
        errorMessage: null,
        calorieData: formatFetchedData(action.payload),
      };
    case calorieCounterActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isStartedFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
