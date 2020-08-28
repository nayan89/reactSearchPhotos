import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CL0pycqNLYwUV8hnAHp7cAthU0-R1oG8Lg1l9sHtPDo'
    }
});