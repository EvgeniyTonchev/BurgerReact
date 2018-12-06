import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});


//instance.defaults.headers = "SOME INSTANCE TOKEN"

export default instance;