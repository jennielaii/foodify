import styled from "styled-components";
import { ReactComponent as FindRecipeIcon } from "../../assets/hamburger.svg";

export const EmptyMessageWrapper = styled.div`
  width: 20%;
  margin: 1rem auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled(FindRecipeIcon)`
  width: 100%;
  height: 200px;
`;
