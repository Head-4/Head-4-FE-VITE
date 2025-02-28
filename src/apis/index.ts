import axios, {AxiosRequestConfig} from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

// export function getTokenHeader(): Record<string, string> {
//     return {Authorization: `Bearer ${Bearer}`};
// }

const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    withCredentials: true,
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);