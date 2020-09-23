import React, { Fragment } from 'react';

const Resultado = ({ resultado, eliminarRegistro }) => {

    return (
        <Fragment>
            {resultado.recorrido <= 4
                ?
                <div className="resultado">
                    <p className="alert alert-error">Sigue Intentando, Debes Caminar Más</p>
                    <button
                        className="button eliminar u-full-width"
                        onClick={() => eliminarRegistro(resultado.id)}
                    >Eliminar Registro</button>
                </div>
                :
                <div className="resultado">
                    <p className="alert-success">Felicidades Por Tu Esfuerzo !</p>
                    <p>Nombre: <span>{resultado.nombre}</span> </p>
                    <p>Correo: <span>{resultado.correo}</span> </p>
                    <p>KM Recorridos: <span>{resultado.recorrido}</span> </p>
                    <button
                        className="button eliminar u-full-width"
                        onClick={() => eliminarRegistro(resultado.id)}
                    >Eliminar Registro</button>
                </div>
            }
        </Fragment>
    )
}

export default Resultado;