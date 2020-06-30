import "./App.css";
import React from "react";

import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
    <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20} />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#ff4b45">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#ff4c65">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
        <Familia sobrenome="Rafael Gonçalves">
          <FamiliaMembro nome="Marcelo" />
          <FamiliaMembro nome="Marlon" />
          <FamiliaMembro nome="Maicon" />
        </Familia>
      </Card>
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
