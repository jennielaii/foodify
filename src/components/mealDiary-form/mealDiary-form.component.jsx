import React from "react";
import { connect } from "react-redux";
import useTextFieldValidate from "../../effects/useTextFieldValidate";
import {
  addMealCard,
  toggleModalButton,
} from "../../store/meal-diary/mealdiary.actions";
import {
  CarbohydrateField,
  CloseButton,
  DateField,
  FatField,
  MealTypeField,
  ProteinField,
  SubmitButton,
} from "../mealdiary-form-fields/mealdiary-form-fields.component";
import { ButtonContainer, Form, FormContainer } from "./mealDiary-form.styles";

const MealDiaryForm = ({ closeWindow, addMealCard }) => {
  const {
    value: date,
    reset: dateReset,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    isValid: dateIsValid,
    onBlur: dateBlurHandler,
  } = useTextFieldValidate();
  const {
    value: mealType,
    reset: mealTypeReset,
    hasError: mealTypeHasError,
    valueChangeHandler: mealTypeChangeHandler,
    isValid: mealTypeIsValid,
    onBlur: mealTypeBlurHandler,
  } = useTextFieldValidate();
  const {
    value: carbo,
    reset: carboReset,
    hasError: carboHasError,
    valueChangeHandler: carboChangeHandler,
    isValid: carboIsValid,
    onBlur: carboBlurHandler,
  } = useTextFieldValidate();
  const {
    value: protein,
    reset: proteinReset,
    hasError: proteinHasError,
    valueChangeHandler: proteinChangeHandler,
    isValid: proteinIsValid,
    onBlur: proteinBlurHandler,
  } = useTextFieldValidate();
  const {
    value: fat,
    reset: fatReset,
    hasError: fatHasError,
    valueChangeHandler: fatChangeHandler,
    isValid: fatIsValid,
    onBlur: fatBlurHandler,
  } = useTextFieldValidate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !dateIsValid ||
      !mealTypeIsValid ||
      !carboIsValid ||
      !proteinIsValid ||
      !fatIsValid
    )
      return;

    addMealCard({ date, mealType, protein, fat, carbo });

    dateReset();
    mealTypeReset();
    proteinReset();
    fatReset();
    carboReset();
  };

  return (
    <FormContainer>
      <Form onSubmit={formSubmitHandler}>
        <DateField
          onChange={dateChangeHandler}
          value={date}
          error={dateHasError}
          onBlur={dateBlurHandler}
        />
        <MealTypeField
          onChange={mealTypeChangeHandler}
          error={mealTypeHasError}
          onBlur={mealTypeBlurHandler}
          value={mealType}
        />
        <CarbohydrateField
          onChange={carboChangeHandler}
          error={carboHasError}
          onBlur={carboBlurHandler}
          value={carbo}
        />
        <ProteinField
          onChange={proteinChangeHandler}
          error={proteinHasError}
          onBlur={proteinBlurHandler}
          value={protein}
        />
        <FatField
          onChange={fatChangeHandler}
          error={fatHasError}
          onBlur={fatBlurHandler}
          value={fat}
        />

        <ButtonContainer>
          <SubmitButton type="submit" />
          <CloseButton onClick={closeWindow} />
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeWindow: () => dispatch(toggleModalButton()),
  addMealCard: (item) => dispatch(addMealCard(item)),
});

export default connect(null, mapDispatchToProps)(MealDiaryForm);
