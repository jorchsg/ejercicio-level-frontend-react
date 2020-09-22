import React, { Fragment } from 'react';

const Formulario = () => {
    return (

        <Fragment>

            <h1>Datos Semanales</h1>
            <form>
                <label>Nombre: </label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre y Apellido"
                />
                <label>Correo: </label>
                <input
                    type="text"
                    className="u-full-width"
                    name="correo"
                    placeholder="ejemplo@ejemplo.com"
                />
                <label>KM Recorridos: </label>
                <input
                    type="number"
                    className="u-full-width"
                    name="recorrido"
                    placeholder="0"
                    min="0"
                    max="200"
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Confirmar Datos</button>

            </form>

        </Fragment>
    );
}

export default Formulario;