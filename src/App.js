import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {

  // Arreglo de Datos
  const [resultados, guardarResultados] = useState([]);

  // Función para leer resultados actuales y permita agregar nuevos
  const crearResultado = (resultado) => {
    // console.log(resultado);
    guardarResultados([
      ...resultados,
      resultado
    ]);
  }

  // Función para eliminar resultado acorde con su ID
  const eliminarRegistro = (id) => {
    const nuevosResultados = resultados.filter(resultado => resultado.id !== id);
    guardarResultados(nuevosResultados);
  }

  // Mostrar titulo en resultados dependiendo el state
  const titulo = resultados.length === 0 ? 'Sin Registros' : 'Tus Resultados';


  return (

    <Fragment>

      <h1>Revisa Tu Resultado Semanal</h1>

      <div className="container">

        <div className="row">

          <div className="one-half column">
            <Formulario
              crearResultado={crearResultado}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {resultados.map(resultado => (
              <Resultado
                key={resultado.id}
                resultado={resultado}
                eliminarRegistro={eliminarRegistro}
              />
            ))}
          </div>

        </div>

      </div>

    </Fragment>

  );
}

export default App;
