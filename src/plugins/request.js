import axios from 'axios'
import { API_URL } from '../store/config'

// create an axios instance
const service = axios.create({
    baseURL: API_URL,
    timeout: 50000,
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        if (localStorage.token) {
            config.headers.Authorization = 'Bearer ' + localStorage.token
            config.headers['X-Requested-With'] = 'XMLHttpRequest'
        }
        return config
    },
    (error) => {
        return console.log(error, 'error1')
    },
)

// response interceptor
service.interceptors.response.use(
    (response) => response,
    // (error) => {
    //   return console.log(error, 'error2')
    // },
)

export default service

