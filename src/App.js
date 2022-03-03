import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error';

function App() {

  // state do formulário
const [busca, guardarbusca] =  useState({
  cidade: ' ',
  pais: ' '
});

const [consultar, guardarConsultar] = useState(false);
const [resultado, guardarResultado] = useState({});
const [error, guardarError] = useState(false);

const { cidade, pais } = busca;

useEffect(() => {
  const consultarAPI = async () => {

      if(consultar) {
        const appId = '0358a04933b6eb2f414958c5586d6ff3';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${appId}`;

        const resposta = await fetch(url);
        const resultado = await resposta.json();

        guardarResultado(resultado);
        guardarConsultar(false);


        if(resultado.cod === "404") {
         guardarError(true);
        } else {
         guardarError(false);
         }
      }
      
  }
  consultarAPI();
 
},[consultar, cidade,pais]);

let componente;
  if(error) {
    componente = <Error mensagem="Não há resultados" />
  } else {
    componente = <Clima 
                    resultado={resultado}
                />
  }

return (
  <Fragment>
      <Header 
        titulo='Clima React App'
      />

      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                      <Formulario 
                        busca={busca}
                        guardarbusca={guardarbusca}
                        guardarConsultar={guardarConsultar}
                      />
                  </div>
                  <div className="col m6 s12">
                        {componente}
                    </div>
              </div>
          </div>
      </div>
  </Fragment>
);
}

export default App;