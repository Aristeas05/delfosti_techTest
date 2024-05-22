import React from 'react';

/**
 * 
 * @param {string} placeholderTexto [String que contiene la descripcion placeholder del input]
 * @param {function} buscarTexto [Funcion que asigna el valor proporcionado al hook perteneciente a la misma]
 * @returns {ReactNode} [Elemento React que forma el input que toma el rol de buscador]
 */
const BuscadorInput = ({placeholderTexto, buscarTexto}) => {

    const handleOnchange = (value) =>{
        buscarTexto(value)
    }

    return(
        <div className='buscador'>
            <input type="text" placeholder={placeholderTexto} onChange={e => handleOnchange(e.target.value)}/>
        </div>
    )
}

export default BuscadorInput;