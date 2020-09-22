import React from 'react';

const Resultado = ({ resultado, eliminarRegistro }) => (

    // Impresion de resultados en Pantalla
    <div className="resultado">
        <p>Nombre: <span>{resultado.nombre}</span> </p>
        <p>Correo: <span>{resultado.correo}</span> </p>
        <p>KM Recorridos: <span>{resultado.recorrido}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarRegistro(resultado.id)}
        >Eliminar Registro</button>

    </div>


);

export default Resultado;