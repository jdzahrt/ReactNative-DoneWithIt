import {create} from 'apisauce';

const apiClient = create({
    baseURL: 'http://127.0.0.1:9000/api',
    headers: {
        Accept: 'application/json',
    },
})

export default apiClient;
