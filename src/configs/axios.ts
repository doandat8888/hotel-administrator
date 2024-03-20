import axios from 'axios'
import { useAuthStore } from '../stores/useUserStore';

export const apigatewayAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_API_GATEWAY_URL || 'http://localhost:8000'
})

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_USER_MGMT_URL || 'http://localhost:8080/api/v1/',
})

export const baseAxiosToken = axios.create({
    baseURL: import.meta.env.VITE_APP_BACK_END_URL || 'http://localhost:4000/api/v1',
})

export const baseAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BACK_END_URL || 'http://localhost:4000/api/v1',
});

authAxios.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authAxios.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apigatewayAxios.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const refreshAccessToken = async () => {
    // Gọi API refresh token và cập nhật token mới
    // Việc này phụ thuộc vào cách bạn cài đặt logic refresh token trong backend
    let newAccessToken = '';
    let newRefreshToken = '';
    try {
        const response = await baseAxios.post('/user/refresh-token', {
            refreshToken: useAuthStore.getState().refreshToken,
        });
        if (response && response.data) {
            newAccessToken = response.data.accessToken;
            newRefreshToken = response.data.refreshToken;
            // Lưu trữ token mới vào local storage hoặc nơi phù hợp
            useAuthStore.getState().setToken(newAccessToken);
            useAuthStore.getState().setRefreshToken(newRefreshToken);
        }
    } catch (error) {
        console.log("Error when refresh token: ", error);
    }

    return newAccessToken;
};

baseAxiosToken.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Kiểm tra nếu error là do token hết hạn và chưa thử refresh token
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Refresh token và thử lại request gốc
            const newAccessToken = await refreshAccessToken();
            authAxios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
            console.log("Token: ", newAccessToken);

            return authAxios(originalRequest);
        }
        return Promise.reject(error);
    }
);

export { authAxios }