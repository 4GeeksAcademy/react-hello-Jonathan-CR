import React from "react";

function ComponentePrueba({ apellido }) {
  let nombre = "Jonathan";

  return (
    <div>
      <h1>Componente de prueba</h1>
      <p>Mi nombre es {nombre}</p>
      <p>Mi apellido es {apellido} </p>
    </div>
  );
}

export default ComponentePrueba;
