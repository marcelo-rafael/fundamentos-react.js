import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Marcelo" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Marlon" {...props} />
      <FamiliaMembro nome="Maicon" sobrenome="Rafael Gonçalves" />
    </div>
  );
};
