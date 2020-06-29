import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

ReactDOM.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParamentro titulo="Situação do Aluno" aluno="Marcelo" nota={10.0} />
    <Fragmento />
  </div>,
  document.getElementById("root")
);
