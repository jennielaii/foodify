import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { tableCells } from "../../constants/tableCells";
import { selectFetchedCalorieDataState } from "../../store/calorie-counter/calorie-counter.selectors";
import CustomTable from "../table/table.component";

const CalorieTable = ({ data }) => {
  const cells = tableCells;
  return (
    <CustomTable
      cells={cells}
      rows={data.nutrients}
      labelName="formatedLabel"
      quantityName="formatedQuantity"
      unitName="unit"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectFetchedCalorieDataState,
});
export default connect(mapStateToProps)(CalorieTable);
