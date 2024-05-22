import React, { useEffect, useState } from 'react';
import BuscadorInput from '../atomos/BuscadorInput';
import Opcion from '../atomos/Opcion';
import { getData } from '../../servicios/apis';

const Filtro = ({generoActual,cambiarGenero}) => {

    const [listaGeneros, setListaGeneros] = useState('');
    const [genero, setGenero] = useState('');

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