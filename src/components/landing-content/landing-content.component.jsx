import React from "react";
// import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

import {
  ContentWrapper,
  Image,
  ImageContainer,
  LandingContentContainer,
  LandingHeading,
  LandingPara,
} from "./landing-content.styles";

const LandingContent = ({ history }) => {
  return (
    <LandingContentContainer>
      <ContentWrapper>
        <LandingHeading>Fitness starts with what you eat.</LandingHeading>
        <LandingPara>
          Take control of your goals. Track your daily calorie intake, find
          healthy recipes,collect your favorite recipes, and learn about
          calorie content of various food items.
        </LandingPara>
        <CustomButton
          onClick={() => history.push("/signup")}
          size="large"
          color="secondary"
          variant="contained"
        >
          Get Started
        </CustomButton>
      </ContentWrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </LandingContentContainer>
  );
};

export default LandingContent
