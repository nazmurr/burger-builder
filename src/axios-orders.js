import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a2954.firebaseio.com'
});

export default instance;