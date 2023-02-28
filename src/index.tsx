import React from "react";
import ReactDOM from "react-dom";
import Renderer from "./app/Renderer/Renderer";
import { GlobalStyles } from "./app/styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Renderer />
  </React.StrictMode>,
  document.getElementById("root")
);
