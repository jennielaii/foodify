import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const RecipePageContainer = styled.div`
  width: 80vw;
  margin: 50px auto;

  @media (max-width: 768px) {
    width: 90vw;
    margin: 50px auto;
  }
`;

export const useFindRecipeTitle = makeStyles({
  title: {
    width: "100&",
    margin: "20px auto",
    // textAlign: "center",
  },
});
