import React from "react";
import { createStructuredSelector } from "reselect";
import MealDiaryCard from "../../cards/mealDiary-card/mealDiary-card.component";
import { Wrapper } from "./meal-diary-card-container.styles";
import { selectMealCards } from "../../../store/meal-diary/mealdiary.selectors.js";
import { connect } from "react-redux";
const MealDiaryCardContainer = ({ mealCards }) => {
  return (
    <Wrapper>
      {mealCards.map((card) => (
        <MealDiaryCard key={card.id} card={card} />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  mealCards: selectMealCards,
});

export default connect(mapStateToProps)(MealDiaryCardContainer);
