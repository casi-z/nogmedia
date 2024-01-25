//
import axios from "axios";

export const API_BASE_URL = process.env.NODE_ENV === 'production' ? `https://9414e7e73885.vps.myjino.ru/api` : 'http://192.168.0.107:5000/api'

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_BASE_URL,
})


$api.interceptors.request.use((config: { headers: { Authorization: string; AccessControlAllowOrigin: any; }; }) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config;
})
