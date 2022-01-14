import styled from "styled-components";
import { color_1, color_5 } from "../../globalStyles";

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto 30px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const Message = styled.p`
  color: ${color_1};
  font-size: 24px;
`;
export const ContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Quantity = styled.p`
  font-size: 18px;
  color: ${color_5};
`;
