import axios from 'axios';
export const http = axios.create({

    baseURL: 'https://curso-vueflix.uc.r.appspot.com/api/v1/movies/'

})