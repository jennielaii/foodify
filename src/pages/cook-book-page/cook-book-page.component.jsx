import React from "react";
import { CookBookTitle } from "../../components/titles/titles.component";
import { CookBookPageContainer } from "./cook-book-page.styles";
import CookBookCardContainer from "../../components/card-containers/cook-book-card-container/cook-book-card-container.component";
const CookBookPage = () => {
  return (
    <CookBookPageContainer>
      <CookBookTitle />
      <CookBookCardContainer />
    </CookBookPageContainer>
  );
};

export default CookBookPage;
