import axios from 'axios';

/**
 * [Esta funcion se encarga de consultar los datos a una API externa para su uso en la aplicacion]
 * @returns {Object} [Retorna un objeto JSON con datos de peliculas y generos. En caso de recibir un error, sera escrito en consola]
 */
export const getData = () => {
    return axios.get(`https://mocki.io/v1/67caea8a-8b20-4c85-9a33-5ae6e3eb30b1`)
      .then(res => {
        return(res.data);
      })
      .catch(err =>{
          console.error('Ocurrio un error: '+ err)
      });
}