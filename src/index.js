import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "./themes/theme";
import Fonts from "./assets/fonts/fonts";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Fonts />
      <App />
    </ThemeProvider>
  </StrictMode>
);
