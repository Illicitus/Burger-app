import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burget-866c3.firebaseio.com/'
});

export default instance;