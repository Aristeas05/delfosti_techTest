import React from 'react';
import './estilos_atomos.scss';

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