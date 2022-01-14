import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import useScreenSize from "../../effects/useScreenSize";
import { color_1, color_3, color_4 } from "../../globalStyles";

const CheckScreenSize = () => {
  const isScreenSmall = useScreenSize();

  return isScreenSmall;
};

const navLinksMobile = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const navLinks = css`
  width: 50%;
  /* height: 80px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const mobileStyles = () => {
  if (CheckScreenSize()) return navLinksMobile;

  return navLinks;
};

export const LogoContainer = styled.div`
  width: 15%;
  /* height: 70px; */
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
  }
`;

export const LinksContainer = styled.div`
  ${mobileStyles}
`;

export const LinkItem = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: ${color_3};
  /* height: 70px; */
  text-align: center;
  margin-top: 10px;

  &:hover {
    color: ${color_4};
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 70px;
  }
`;
