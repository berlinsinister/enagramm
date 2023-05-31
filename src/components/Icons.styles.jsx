import styled, { css } from "styled-components/macro";

const svgSettings = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

export const Svg = styled(svgSettings)`
  ${({ width, height }) => css`
    max-width: ${width};
    min-width: ${width};
    height: ${height};

    transition: all 0.2s ease-out;
  `};
`;
