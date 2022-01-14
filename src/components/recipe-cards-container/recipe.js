import styled from "styled-components";

export const RecipeContainer = styled.div`
  width: 80vw;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  row-gap: 20px;

  @media (max-width: 768px) {
    width: 100vw;
    grid-template-columns: repeat(1, 1fr);
  }
`;
