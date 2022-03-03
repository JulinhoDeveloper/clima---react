import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensagem}) => {
    return ( 
        <p className="red darken-4 error">{mensagem}</p>
     );
}

Error.propTypes = {
    mensagem: PropTypes.string.isRequired
}
 
export default Error;