import React, { useEffect, useState } from 'react';
import './estilos_moleculas.scss';
import CardInfo from '../Atomos/CardInfo';

/**
 * 
 * @param {Array} peliculas [Array con la lista de peliculas a mostrar] 
 * @param {Array} genero [Array que contiene todos los generos de peliculas permitidas a mostrarse]
 * @returns {ReactNode} [Elemento React con todas las peliculas listadas]
 */
const Peliculas = ({peliculas, genero}) => {

    const [contador, setContador] = useState(1);

    useEffect(() => {
        setContador(contador+1);
    },[contador]);
    

    return(
        <div className='peliculas'>
            {
                peliculas.length
                ?
                peliculas.map( (j, i) =>{
                    let mostrar = genero.find( val => val === j.genre );
                    if (!genero.length) {
                        return(
                            <CardInfo key={j+i} title={j.title} desc={j.description} generos={j.genre}/>
                        )
                    }else if (mostrar != undefined) {
                        return(
                            <CardInfo key={j+i} title={j.title} desc={j.description} generos={j.genre}/>
                        )
                    }
                })
                : 
                <p>No existen peliculas en cartelera</p>
            }
        </div> 
    )
}

export default Peliculas;