import React, { useEffect, useState } from 'react';
import './estilos_organismos.scss';
import BuscadorInput from '../atomos/BuscadorInput';
import Peliculas from '../moleculas/Peliculas';
import Filtro from '../moleculas/Filtro';
import { getData } from '../../servicios/apis';

/**
 *
 * @returns {ReactNode} [Elemento React que muestra la barra de busqueda y los componentes de "Filtro" y "Peliculas"]
 */
const Cartelera = () => {

    const [listaPeliculas, setListaPeliculas] = useState('');
    const [pelicula, setPelicula] = useState('');
    const [filtroGenero, setFiltroGenero] = useState([]);

    /**
     * [Esta funcion busca la palabra/frase ingresada en el formulario para mostrar las peliculas que la contengan en su titulo o descripción]
     */
    const actualizarPeliculasPorTexto = () => {
        let encontrado = [];
        if (pelicula != '') {
            encontrado = listaPeliculas.filter((val) => val.title.toUpperCase().includes(pelicula.toUpperCase()) || val.description.toUpperCase().includes(pelicula.toUpperCase()));
            if (encontrado.length) {
                setListaPeliculas(encontrado);
            }else{
                setListaPeliculas([]);
            }
        }else{
            cargarData();
        }
    }

    /**
     * [Esta funcion hace uso del API para cargar los datos al hook "listaPeliculas"]
     */
    const cargarData = async () =>{
        let jsonData = await getData();
        setListaPeliculas(jsonData.movies);
    }

    useEffect(() => {
        actualizarPeliculasPorTexto();
    },[pelicula]);

    useEffect(() => {
        cargarData();
    }, [])

    return(
        <>
            <div className='cartelera__buscador'>
                <p>
                    Busca tu película:
                </p>
                <BuscadorInput placeholderTexto={'Ingresa el título o la descripción'} buscarTexto={setPelicula}/>
            </div>
            <Filtro generoActual={filtroGenero} cambiarGenero={setFiltroGenero}/>
            <Peliculas peliculas={listaPeliculas} genero={filtroGenero}/>
        </>
    )
}

export default Cartelera;