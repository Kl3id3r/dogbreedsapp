// Vendors
import axios, { AxiosInstance } from "axios"

const BASE_URL = 'https://dog.ceo/api';

/**
 * Definición de la conexión con la API
 */
const API: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

export default API