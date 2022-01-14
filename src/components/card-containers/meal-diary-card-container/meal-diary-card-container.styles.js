import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
