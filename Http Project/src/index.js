import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//axios.defaults.baseURL="https://jsonplaceholder.typicode.com"
//axios.defaults.headers = "SOME NICU TOKEN"
//axios.defaults.headers.post['Content-Type'] = "some shit"

axios.interceptors.request.use(request => {

    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
