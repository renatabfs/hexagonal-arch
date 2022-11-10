import axios from 'axios'

export const APIClient = axios.create({
    baseURL: "localhost:3000/api"
})