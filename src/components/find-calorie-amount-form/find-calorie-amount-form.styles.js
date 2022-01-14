import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import { Form } from "../find-recipe-form/find-recipe-form.styles";

export const CalorieCOunterForm = styled(Form)`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const useStylesForCalorieCounterForm = makeStyles({
  searchField: {
    width: "300px",
  },
  amountField: {
    width: "100px",
  },
});
