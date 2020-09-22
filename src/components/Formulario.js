import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // State de resultados
    const [resultado, actualizarResultado] = useState({
        nombre: '',
        correo: '',
        recorrido: 0
    });

    // Función a ejecutarse cada que el usuario escribe en el input
    const actualizarState = (e) => {
        // Leyendo y pasando los valores capturados del usuario al state
        actualizarResultado({
            ...resultado,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores con destructuring
    const { nombre, correo, recorrido } = resultado;

    // Información a mostrar en la interfaz
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
                    onChange={actualizarState}
                    value={nombre}
                />
                <label>Correo: </label>
                <input
                    type="text"
                    className="u-full-width"
                    name="correo"
                    placeholder="ejemplo@ejemplo.com"
                    onChange={actualizarState}
                    value={correo}
                />
                <label>KM Recorridos: </label>
                <input
                    type="number"
                    className="u-full-width"
                    name="recorrido"
                    placeholder="0"
                    min="0"
                    max="200"
                    onChange={actualizarState}
                    value={recorrido}
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