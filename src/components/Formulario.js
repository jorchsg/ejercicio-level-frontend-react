import React, { Fragment, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearResultado }) => {

    // State de resultados
    const [resultado, actualizarResultado] = useState({
        nombre: '',
        correo: '',
        recorrido: 0
    });

    // State para errores
    const [error, actualizarError] = useState(false);

    // Función a ejecutarse cada que el usuario escribe en el input
    const actualizarState = (e) => {
        // Leyendo y pasando los valores capturados del usuario al state
        actualizarResultado({
            ...resultado,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores con destructuring al state
    const { nombre, correo, recorrido } = resultado;

    // Funcion de envío de formulario
    const submitDatos = (e) => {

        e.preventDefault();

        // Validar Formulario
        if (nombre.trim() === '' || correo.trim() === '' || recorrido <= 0) {

            actualizarError(true);

            return;
        }
        // Si todo es correcto remueve el mensaje de error
        actualizarError(false);

        // Asignando ID único con la libreria uuid
        resultado.id = uuidv4();
        // console.log(resultado);

        // Generar los datos
        crearResultado(resultado)

        //Limpiar el formulario después de la captura
        actualizarResultado({
            nombre: '',
            correo: '',
            recorrido: 0
        });

    }

    // Información a mostrar en la interfaz
    return (

        <Fragment>

            <h1>Ingresa Tus Datos</h1>

            {error ? <p className="alert-error">Datos Inválidos o Campo Vacío</p> : null}

            <form
                onSubmit={submitDatos}
            >
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
                    type="email"
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