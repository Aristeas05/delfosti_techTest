import React, { useEffect, useState } from 'react';
import './estilos_moleculas.scss';
import CardInfo from '../atomos/CardInfo';

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