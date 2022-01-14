import { CALORIE_COUNTER } from "../../config/api.js";
import { fetchData } from "../../utils/fetchData";
import { calorieCounterActionTypes } from "./calorie-counter.types";

export const startFetchingData = () => ({
  type: calorieCounterActionTypes.FETCH_START,
});
export const successFetchingData = (data) => ({
  type: calorieCounterActionTypes.FETCH_SUCCESS,
  payload: data,
});
export const failFetchingData = (error) => ({
  type: calorieCounterActionTypes.FETCH_FAILURE,
  payload: error,
});

export const fetchCalorieDataAsync = ({ fooditem, quantity }) => {
  return async (dispatch) => {
    const url = `${CALORIE_COUNTER}${quantity}g%20${fooditem}`;
    try {
      dispatch(startFetchingData());
      const response = await fetchData(url);
      console.log(response);
      dispatch(successFetchingData(response));
    } catch (error) {
      console.log(error);
      dispatch(failFetchingData(error.message));
    }
  };
};
