import { cookBookActionTypes } from "./cook-book.types";
import { addOrRemoveFromCookBook } from "./cook-book.utils";

const INITIAL_STATE = {
  cookBookList: [],
};

export const cookBooKReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cookBookActionTypes.TOGGLE_RECIPE_CARD:
      return {
        ...state,
        cookBookList: addOrRemoveFromCookBook(
          state.cookBookList,
          action.payload
        ),
      };
    default:
      return state;
  }
};
