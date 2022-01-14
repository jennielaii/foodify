import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CalorieCounterResult from "../../components/calorie-counter-results/calorie-counter-result";
import EmptyMessage from "../../components/empty-message/empty-message.component";
import FindCalorieAmountForm from "../../components/find-calorie-amount-form/find-calorie-amount-form";
import { CalorieCounterTitle } from "../../components/titles/titles.component";
import withSpinner from "../../hoc/withSpinner";
import {
  selectFetchedCalorieDataState,
  selectIsFetchingStarted,
  selectLoadingState,
} from "../../store/calorie-counter/calorie-counter.selectors";
import { CalorieCounterPageContainer } from "./find-calorie-amount.styles";

const DisplayCalorieDataWithSpinner = withSpinner(CalorieCounterResult);

const FindCalorieAmountPage = ({ isFetching, isStarted, calorieData }) => {
  return (
    <CalorieCounterPageContainer>
      <CalorieCounterTitle />
      <FindCalorieAmountForm />
      <DisplayCalorieDataWithSpinner
        isLoading={isFetching}
        isStartedFetching={isStarted}
      />
      {!calorieData && <EmptyMessage>Haven't found anything yet!</EmptyMessage>}
    </CalorieCounterPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectLoadingState,
  isStarted: selectIsFetchingStarted,
  calorieData: selectFetchedCalorieDataState,
});

export default connect(mapStateToProps)(FindCalorieAmountPage);
