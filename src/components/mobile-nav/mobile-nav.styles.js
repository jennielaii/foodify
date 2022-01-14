import styled from "styled-components";
import { color_1 } from "../../globalStyles";
import { HeaderContainer } from "../header/header.styles";

export const NavContainer = styled(HeaderContainer)`
  width: 300px;
  height: 100vh;
  padding: 100px 20px;
  background-color: ${color_1};
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;
