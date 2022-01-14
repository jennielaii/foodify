import React from "react";
import { TOOL_TYPES } from "../../constants";
import LandingToolCard from "../landing-tool-card/landing-tool-card.component";
import {
  LandingToolHeading,
  LandingToolsContainer,
  ToolTypesContainer,
} from "./landing-tool.styles";

const LandingTools = () => {
  return (
    <LandingToolsContainer>
      <LandingToolHeading>MyMeal Tools</LandingToolHeading>
      <ToolTypesContainer>
        {TOOL_TYPES.map((each) => (
          <LandingToolCard key={each.title} tool={each} />
        ))}
      </ToolTypesContainer>
    </LandingToolsContainer>
  );
};

export default LandingTools;
