import React from 'react';

/**
 * 
 * @param {string} tag [String que contiene el nombre de la opcion]
 * @param {function} funcionClick [Funcion que registra el click que se haga en la opcion para poder cambiar los filtros de género]
 * @returns {ReactNode} [Elemento React que lista todas las opciones de genero existentes o filtradas]
 */
const Opcion = ({tag, funcionClick}) => {

    return(
        <div className='opcion' onClick={()=>funcionClick(tag)}>
            <span>
                {tag}
            </span>
        </div>
    )
}

export default Opcion;