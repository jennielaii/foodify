import { Dialog } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsModalOpen } from "../../store/meal-diary/mealdiary.selectors";
import MealDiaryForm from "../mealDiary-form/mealDiary-form.component";

const DiaryModal = ({ isModalOpen }) => {
  return (
    <Dialog open={isModalOpen}>
      <MealDiaryForm />
    </Dialog>
  );
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: selectIsModalOpen,
});

export default connect(mapStateToProps)(DiaryModal);
