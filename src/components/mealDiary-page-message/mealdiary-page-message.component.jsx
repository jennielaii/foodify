import React from "react";
import {
  ContentWrapper,
  Message,
  Quantity,
  Wrapper,
} from "./mealdiary-page-message.styles";

const MealDiaryPageMessage = () => {
  return (
    <Wrapper>
      <Message>
        We recommend that your diet be split according to these percentages
      </Message>
      <ContentWrapper>
        <Quantity>protein: 10% to 35%</Quantity>
        <Quantity>carbohydrates : 45% to 65%</Quantity>
        <Quantity>fat : 20% to 35%</Quantity>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MealDiaryPageMessage;
