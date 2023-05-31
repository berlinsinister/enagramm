import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 22px 38px;
  border-bottom: 1px solid #e3e3e3;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  ${({ theme: { fonts }, isWhite }) => css`
    all: unset;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 20px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xsmall};
    cursor: pointer;

    ${isWhite
      ? css`
          border-radius: 8px;
          border: 1px solid #dfdfdf;
          font-weight: 500;
          background-color: #fff;
          color: #4b4b4b;
        `
      : css`
          border-radius: 6px;
          font-weight: 600;
          background-color: #2d62ed;
          color: #fff;
        `}
  `}

  :hover {
    opacity: 0.9;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 65px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;
