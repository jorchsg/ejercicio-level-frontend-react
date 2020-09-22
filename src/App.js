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
            <h2>Tus Resultados</h2>
            {resultados.map(resultado => (
              <Resultado
                key={resultado.id}
                resultado={resultado}
              />
            ))}
          </div>

        </div>

      </div>

    </Fragment>

  );
}

export default App;
