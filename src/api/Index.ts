import axios from "axios";
import { REACT_APP_API_URL } from "../const";

const $host = axios.create({ baseURL: REACT_APP_API_URL });

const $authHost = axios.create({ baseURL: REACT_APP_API_URL });

const authInterceptors = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptors);

export { $authHost, $host };
