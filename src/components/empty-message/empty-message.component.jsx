import React from "react";
import CustomTitle from "../custom-title/custom-title.component";
import { EmptyMessageWrapper, Image } from "./empty-message.styles";

const EmptyMessage = ({ children }) => {
  return (
    <EmptyMessageWrapper>
      <CustomTitle
        color="secondary"
        align="center"
        variant="body1"
        component="p"
      >
        {children}
      </CustomTitle>
      <Image />
    </EmptyMessageWrapper>
  );
};

export default EmptyMessage;
