import axios from 'axios';
import { SecureStorageAdapter } from '@/lib/secure-storage-adapter';
import { Platform } from 'react-native';



const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_HOST + '/api'
});



api.interceptors.request.use(async (config) => {
    // Verificar si tenemos un token en localStorage o SecureStore

    const token =
        Platform.OS === 'web'
            ? localStorage.getItem('token')
            : await SecureStorageAdapter.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});



export default api;
