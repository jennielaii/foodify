import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* height: 100px; */

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
`;

export const useStylesForForm = makeStyles({
  searchField: {
    width: "300px",
  },
  mealtypeField: {
    width: "200px",
  },
});
