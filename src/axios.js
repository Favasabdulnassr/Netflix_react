import axios from 'axios'
import {API_BASE} from './constants/constants'

const instance = axios.create({
    baseURL: API_BASE,
});

export default instance