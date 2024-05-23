import React, { useEffect, useState } from 'react';
import BuscadorInput from '../atomos/BuscadorInput';
import Opcion from '../atomos/Opcion';
import { getData } from '../../servicios/apis';

/**
 * 
 * @param {Array} generoActual [Array con la lista de generos de pelicula actuales permitidos que puedan mostrarse]
 * @param {function} cambiarGenero [funcion para cambiar el valor de la lista de generos actuales ]
 * @returns {ReactNode} [Elemento React con las opciones de genero disponibles, despues del filtro]
 */
const Filtro = ({generoActual,cambiarGenero}) => {

    const [listaGeneros, setListaGeneros] = useState('');
    const [genero, setGenero] = useState('');

    /**
     * [Esta funcion busca la palabra/frase ingresada en el formulario para mostrar los generos que la contengan en su texto]
     */
    const actualizarGeneros = () => {
        let encontrado = '';
        if (genero != '') {
            encontrado = listaGeneros.filter((val) => val.toUpperCase().includes(genero.toUpperCase()) || val.toUpperCase().includes(genero.toUpperCase()));
            if (encontrado.length) {
                setListaGeneros(encontrado);
            }else{
                setListaGeneros([]);
            }
        }else{
            cargarData();
        }
    }

    /**
     * [Esta funcion busca el String ingresado en el formulario para mostrar las peliculas pertenezcan al mismo genero]
     * @param {string} valor [String cuyo valor agrega/quita peliculas que pertenezcan al genero igual al String]
     */
    const actualizarPeliculasPorGenero = (valor) => {
        let item = '';
        let viejaLista = generoActual;
        let nuevaLista = [];
        if (viejaLista.length) {
            item = viejaLista.find((element) => element === valor);
            if (item != undefined) {
                nuevaLista = viejaLista.filter((val) => val != valor);
                cambiarGenero(nuevaLista);
            }else{
                viejaLista.push(valor);
                cambiarGenero(viejaLista);
            }
        }else{
            nuevaLista.push(valor)
            cambiarGenero(nuevaLista);
        }
    };

    /**
     * [Esta funcion hace uso del API para cargar los datos al hook "listaGeneros"]
     */
    const cargarData = async () =>{
        let jsonData = await getData();
        setListaGeneros(jsonData.genres);
    }

    useEffect(() => {
        actualizarGeneros();
    },[genero]);

    useEffect(() =>{
        cargarData();
    },[]);

    return(
        <div className='filtro'>
            <div className='filtro__buscador'>
                <p>
                    Buscar géneros:
                </p>
                <BuscadorInput placeholderTexto={'Ingresa el género a buscar'} buscarTexto={setGenero}/>
            </div>
            <div className='filtro__opciones'>
                {
                    listaGeneros.length
                    ?
                    listaGeneros.map( (f,i) => {
                        return(
                            <Opcion tag={f} key={f+i} funcionClick={actualizarPeliculasPorGenero}/>
                        )
                    })
                    : <p>No existen criterios de filtro</p>
                }
            </div>
        </div>
    )
}

export default Filtro;