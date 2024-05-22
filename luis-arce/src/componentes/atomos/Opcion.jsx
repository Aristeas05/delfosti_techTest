import React from 'react';


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