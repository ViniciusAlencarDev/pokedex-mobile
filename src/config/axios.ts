import axios from 'axios';

const baseURL = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export default { baseURL }
