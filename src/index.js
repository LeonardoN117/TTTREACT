import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TicTacToe from "./TicTacToe";
import Calculator from "./Calculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TicTacToe />
    <Calculator/>
  </StrictMode>
);