import React from 'react';
import './estilos_atomos.scss';
/**
 * 
 * @param {string} title [String que contiene el titulo de la pelicula]
 * @param {string} desc [String que contiene la descripcion de la pelicula]
 * @param {string} generos [String que contiene el genero de la pelicula]
 * @returns {ReactNode} [Elemento React que forma el card con la informacion de la pelicula]
 */
const CardInfo = ({title, desc, generos}) => {

    return(
        <div className='card'>
            <img src="./banner_1.jpg" alt={title} />
            <div>
                <h2>{title}</h2>
                <p>Género: <span>{generos}</span></p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CardInfo;