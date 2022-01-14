import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

export const RecipeImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 8px;
`;

export const ChipGrp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonGrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

export const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
