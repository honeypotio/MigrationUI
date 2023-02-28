import { createGlobalStyle } from "styled-components";
import { config } from "../config";

const { theme } = config;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background: ${theme.background};
  }
`;
