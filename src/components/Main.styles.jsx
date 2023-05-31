import styled, { css, keyframes } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  background-color: #f8f8f8;
`;

export const HandlersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92.4%;
  height: 115px;
  padding-top: 50px;
  padding-left: 120px;
  padding-right: 35px;
  border-bottom: 1px solid #ededed;

  @media screen and (max-width: 1440px) {
    max-width: 1130px;
    width: 100%;
  }
`;

export const CheckButton = styled.button`
  ${({ theme: { fonts } }) => css`
    all: unset;
    display: flex;
    align-items: center;
    gap: 5px;
    height: 36px;
    padding: 0 20px;
    border-radius: 6px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xsmall};
    font-weight: 600;
    background-color: #2d62ed;
    color: #fff;
    cursor: pointer;
  `}

  :hover {
    opacity: 0.9;
  }
`;

export const HandlerButton = styled.button`
  ${({ theme: { fonts }, isActive }) => css`
    all: unset;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 20px;
    padding: 0 14px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xxsmall};
    cursor: pointer;

    ${isActive
      ? css`
          height: 36px;
          margin-left: auto;
          border-radius: 4px;
          background-color: #ededed;
          color: #2d62ed;
        `
      : css`
          color: #606060;
        `}

    :last-of-type {
      padding-right: 30px;
      border-right: 1px solid #cccaca;
    }

    :hover {
      opacity: 0.9;
    }
  `}
`;

export const LanguageDropdownWrapper = styled.div`
  position: relative;

  :hover {
    .icon-wrapper {
      transform: rotate(180deg);
    }
  }
`;

export const LanguageDropdown = styled.div`
  ${({ theme: { fonts } }) => css`
    display: flex;
    align-items: center;
    height: 36px;
    padding: 0 10px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xxsmall};
    color: #606060;
    cursor: pointer;
  `}
`;

export const LanguageImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const IconWrapper = styled.div`
  margin-left: 16px;
  transition: all 0.35s ease-out;
`;

const enterLanguageItem = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LanguageItem = styled.div`
  ${({ theme: { fonts } }) => css`
    position: absolute;
    top: 36px;
    left: 0;

    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xxsmall};
    background-color: #f8f8f8;
    cursor: pointer;
    opacity: 0;
    transform: translateY(7px);
    animation: ${enterLanguageItem} 0.4s ease-out forwards;

    :hover {
      font-weight: 500;
    }
  `}
`;

export const TextArea = styled.textarea`
  ${({ theme: { fonts } }) => css`
    height: calc(100vh - 80px - 115px - 135px);
    padding: 50px 120px;
    border: none;
    outline: none;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xsmall};
    background-color: #f8f8f8;
    resize: none;
  `};
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Toolbar = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: calc(92.4% - 80px);
  height: 135px;
  margin-left: 80px;
  padding: 40px;
  border-top: 1px solid #ededed;

  @media screen and (max-width: 1440px) {
    max-width: 900px;
    width: 100%;
  }
`;

export const ToolSection = styled.section`
  display: flex;
  padding: 0 24px;
  gap: 24px;
  border-right: 1px solid #cccaca;
  :first-of-type {
    padding: 0 24px 0 0;
  }
  :last-of-type {
    border: none;
  }
`;

export const ToolButtonWrapper = styled.div`
  position: relative;
`;

export const ToolButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Tooltip = styled.div`
  ${({ theme: { fonts } }) => css`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 4px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xxsmall};
    background-color: #001849;
    color: #fff;
    white-space: nowrap;
    z-index: 1;
    ::after {
      content: "";
      position: absolute;
      top: -11px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent #001849 transparent;
    }
  `}
`;

export const TextStats = styled.div`
  ${({ theme: { fonts } }) => css`
    position: absolute;
    top: 36px;
    left: 51vw;
    padding: 8px 20px;
    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xxsmall};
    background-color: #fff;
    white-space: nowrap;

    @media screen and (max-width: 1200px) {
      top: auto;
      left: 36px;
      bottom: 15px;
    }
  `}
`;

export const LogoWrapper = styled.div`
  width: 38px;
  height: 37px;
  margin-right: 60px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
