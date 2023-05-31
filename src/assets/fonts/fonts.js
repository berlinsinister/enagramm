import { createGlobalStyle } from "styled-components";

import interRegularSource from "./Inter-Regular.ttf";
import interMediumSource from "./Inter-Medium.ttf";
import interSemiBoldSource from "./Inter-SemiBold.ttf";
import interBoldSource from "./Inter-Bold.ttf";

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${interRegularSource}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${interMediumSource}) format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${interSemiBoldSource}) format('truetype');
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${interBoldSource}) format('truetype');
    font-weight: 700;
  }
`;

export default Fonts;
