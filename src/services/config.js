import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create(
    {
        baseURL: baseUrl,
    }
);

const token = localStorage.getItem("accessToken");

if(token){
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}