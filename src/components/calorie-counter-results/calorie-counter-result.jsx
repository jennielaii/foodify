import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectErrorMessageState,
  selectFetchedCalorieDataState,
} from "../../store/calorie-counter/calorie-counter.selectors";
import CalorieTable from "../calorie-table/calorie-table.component";
import { ErrorMessage, ResultParagraph } from "../titles/titles.component";

const CalorieCounterResult = ({ data, error }) => {
  return (
    <>
      {/* check the length of the nutrients array to find wether there is data */}
      {data?.nutrients.length > 0 && (
        <>
          <ResultParagraph>Calories : {data.calories}</ResultParagraph>
          <ResultParagraph>
            Total Weight: {data.totalWeight} grams
          </ResultParagraph>
          <CalorieTable />
        </>
      )}

      {/* if the array length is 0 there is no data to display */}
      {data?.nutrients.length === 0 && (
        <ErrorMessage>No Result Found</ErrorMessage>
      )}
      {/* if there is an error display the error */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  data: selectFetchedCalorieDataState,
  error: selectErrorMessageState,
});
export default connect(mapStateToProps)(CalorieCounterResult);
