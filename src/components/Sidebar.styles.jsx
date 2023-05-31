import styled, { css } from "styled-components";

export const Sidebar = styled.aside`
  ${({ theme: { fonts } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-width: 180px;
    height: calc(100vh - 80px);

    margin-top: 80px;
    padding: 85px 0 58px 0;

    font-family: ${fonts.family.primary};
    font-size: ${fonts.sizes.xxsmall};

    background-color: #2d62ed;
    color: #fff;
  `};
`;

export const NavMenu = styled.nav`
  position: relative;
  margin-left: 20px;
`;

export const NavMenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 190px;
  background-color: #f8f8f8;
`;

export const MenuItemsWrapper = styled.ul`
  list-style: none;
  position: relative;
  z-index: 1;
`;

export const MenuItem = styled.li`
  ${({ isPrevActive, isActive, isNextActive }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 38px;
    padding-left: 10px;
    background-color: #2d62ed;
    cursor: pointer;
    transition: all 0.3s ease-out;

    :first-of-type,
    :last-of-type {
      pointer-events: none;
      cursor: auto;
    }

    ${isPrevActive &&
    css`
      border-bottom-right-radius: 20px;
    `}

    ${isActive &&
    css`
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: #f8f8f8;
      color: #2d62ed;
    `}

    ${isNextActive &&
    css`
      border-top-right-radius: 20px;
    `}
  `};
`;

export const Footer = styled.div``;

export const SettingsWrapper = styled.div`
  margin: 0 20px;
  padding: 30px 0 35px 0;
  border-top: 2px solid #9eb9ff;
  border-bottom: 2px solid #9eb9ff;
`;

export const SettingsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  cursor: pointer;
`;

export const Mode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 53px;
  height: 26px;
  margin: 0 auto;
  margin-top: 53px;
  padding: 3px;
  border-radius: 50px;
  border: 1px solid #dbe9fd;
  cursor: pointer;
`;
