import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParametro";

ReactDOM.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParamentro
      titulo="Situação do Aluno"
      aluno="Marcelo"
      nota={10.0}
    ></ComParamentro>
  </div>,
  document.getElementById("root")
);
