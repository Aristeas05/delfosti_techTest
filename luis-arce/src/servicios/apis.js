import axios from 'axios';

export const getData = () => {
    return axios.get(`https://mocki.io/v1/67caea8a-8b20-4c85-9a33-5ae6e3eb30b1`)
      .then(res => {
        return(res.data);
      })
      .catch(err =>{
          console.error('Ocurrio un error: '+ err)
      });
}