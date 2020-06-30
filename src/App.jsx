import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#fa6900">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#e94c6f">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parametro" color="#e8b71a">
        <ComParametro titulo="Situação do Aluno" aluno="Marcelo" nota={10.0} />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#588c73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
