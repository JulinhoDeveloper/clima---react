import React, { useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busca, guardarbusca, guardarConsultar}) => {


const [error, guardarError] = useState(false);

// extrair cidade e país
const {  cidade, pais } = busca;

//  funcão para colocar os elementos do state
const handleChange =  e =>{
    //atualiza o state
    guardarbusca({ 
        ...busca,
        [e.target.name] : e.target.value
    });
}

//quando o usuario dar submit ao formulário
const handleSubmit = e => {
    e.preventDefault();

    // validar
    if(cidade.trim() === '' || pais.trim() === '') {
        guardarError(true);
        return;
    }
    guardarError(false);
  
    guardarConsultar(true);
}

  return (
    <form
    onSubmit={handleSubmit}
    >
         {error ? <Error mensagem="Os campos são obrigatórios" /> : null }
      <div className="input-field col s12">
          <input
          type="text"
          name="cidade"
          id="cidade"
          value={cidade}
          onChange={handleChange}
          />
          <label htmlFor="cidade">Cidade: </label>
      </div>

      <div className="input-field col s12">
      <select
      name="pais"
      id="pais"
      value={pais}
      onChange={handleChange}
      >
          <option value="">-- Selecione um país --</option>
          <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Espanha</option>
                    <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais">País: </label>
          </div>

          <div className="input-field col s12">
                <input  
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
  );
}

Formulario.propTypes = {
    busca : PropTypes.object.isRequired,
    guardarbusca : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired,
}
 

export default Formulario
