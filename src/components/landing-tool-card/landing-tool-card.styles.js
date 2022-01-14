import styled from "styled-components";
import { color_1, color_2, color_3 } from "../../globalStyles";

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;

  padding: 1rem;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin: auto;
  border-radius: 50%;
  border: 5px solid ${color_2};

  @media (max-width: 360px) {
    width: 150px;
    height: 150px;
  }
`;

export const DetailContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 50%;
  margin: auto;
`;

export const Title = styled.p`
  font-size: 30px;
  color: ${color_2};
  font-weight: 400;
`;

export const Value = styled.p`
  font-size: 18px;
  color: ${color_1};
  font-weight: 300;
`;
