import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2rem;
`;
export const Form = styled.form`
  width: 20vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 360px) {
    width: 70vw;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
