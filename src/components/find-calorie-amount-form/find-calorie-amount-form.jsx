import React from "react";
import CustomIconButton from "../custom-icon-button/custom-icon-button.component";

import { InputField } from "../input-fields/input-fields.component";
import SearchIcon from "@material-ui/icons/Search";
import {
  CalorieCOunterForm,
  useStylesForCalorieCounterForm,
} from "./find-calorie-amount-form.styles";
import { InputAdornment } from "@material-ui/core";
import { fetchCalorieDataAsync } from "../../store/calorie-counter/calorie-counter.actions";
import { connect } from "react-redux";
import useTextFieldValidate from "../../effects/useTextFieldValidate";

const FindCalorieAmountForm = ({ fetchCalorieData }) => {
  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    if (!foodNameIsValid || !amountIsValid) return;
    fetchCalorieData(foodName, amount);
    foodNameReset();
    amountReset();
  };

  const {
    value: foodName,
    reset: foodNameReset,
    hasError: foodNameHasError,
    valueChangeHandler: foodNameChangeHandler,
    isValid: foodNameIsValid,
    onBlur: foodNameBlurHandler,
  } = useTextFieldValidate();
  const {
    value: amount,
    reset: amountReset,
    hasError: amountHasError,
    valueChangeHandler: amountChangeHandler,
    isValid: amountIsValid,
    onBlur: amountBlurHandler,
  } = useTextFieldValidate();

  const classes = useStylesForCalorieCounterForm();

  return (
    <CalorieCOunterForm onSubmit={formOnSubmitHandler}>
      <InputField
        className={classes.searchField}
        id="recipe-search"
        type="text"
        label="Food Name"
        color="secondary"
        value={foodName}
        onChange={foodNameChangeHandler}
        error={foodNameHasError}
        onBlur={foodNameBlurHandler}
      />
      <InputField
        className={classes.amountField}
        id="quantity"
        type="number"
        label="Quantity"
        color="secondary"
        value={amount}
        onChange={amountChangeHandler}
        error={amountHasError}
        onBlur={amountBlurHandler}
        InputProps={
          ({ inputProps: { min: 1 } },
          {
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          })
        }
      />
      <CustomIconButton
        ariaLabel="search"
        color="secondary"
        variant="contained"
        type="submit"
      >
        <SearchIcon fontSize="large" />
      </CustomIconButton>
    </CalorieCOunterForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCalorieData: (fooditem, quantity) =>
    dispatch(fetchCalorieDataAsync({ fooditem, quantity })),
});

export default connect(null, mapDispatchToProps)(FindCalorieAmountForm);
