import axios, {AxiosRequestConfig} from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;
const Bearer = import.meta.env.VITE_APP_BEARER_TOKEN;

export function getTokenHeader(): Record<string, string> {
    return {Authorization: `Bearer ${Bearer}`};
}

const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    withCredentials: true,
    headers: getTokenHeader()
};

export const axiosInstance = axios.create(config);