import React from "react";
import MealDiaryCardContainer from "../../components/card-containers/meal-diary-card-container/meal-diary-card-container.component";
import DiaryModalContainer from "../../components/diary-modal-container/diary-modal-container";
import MealDiaryPageMessage from "../../components/mealDiary-page-message/mealdiary-page-message.component";
import { MealDiaryPageContainer } from "./meal-diary-page.styles";
const MealDiaryPage = () => {
  return (
    <MealDiaryPageContainer>
      <MealDiaryPageMessage />
      <DiaryModalContainer />
      <MealDiaryCardContainer />
    </MealDiaryPageContainer>
  );
};

export default MealDiaryPage;
