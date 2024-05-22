import React from 'react';


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