import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder.com/'
});

export default instance;