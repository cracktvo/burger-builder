import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9db15.firebaseio.com/'
});

export default instance;