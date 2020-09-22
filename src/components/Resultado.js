import React from 'react';

const Resultado = ({ resultado }) => (
    <div className="resultado">
        <p>Nombre: <span>{resultado.nombre}</span> </p>
        <p>Correo: <span>{resultado.correo}</span> </p>
        <p>KM Recorridos: <span>{resultado.recorrido}</span> </p>
    </div>
);

export default Resultado;