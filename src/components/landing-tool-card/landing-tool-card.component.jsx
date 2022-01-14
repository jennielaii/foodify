import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
  CardContainer,
  DetailContainer,
  ImageContainer,
  Title,
  Value,
} from "./landing-tool-card.styles";

const LandingToolCard = ({
  tool: { title, value, imageUrl, button, url },
  history,
}) => {
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <DetailContainer>
        <Title>{title}</Title>
        <Value>{value}</Value>
        <CustomButton
          size="small"
          color="primary"
          variant="contained"
          onClick={() => history.push(url)}
        >
          {button}
        </CustomButton>
      </DetailContainer>
    </CardContainer>
  );
};

export default LandingToolCard;
