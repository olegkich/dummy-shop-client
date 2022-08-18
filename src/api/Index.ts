import axios from "axios";
import { REACT_APP_API_URL } from "../const";

const $host = axios.create({ baseURL: REACT_APP_API_URL });

const $authHost = axios.create({ baseURL: REACT_APP_API_URL });

const $formDataAuthHost = axios.create({ baseURL: REACT_APP_API_URL });

const authInterceptors = (config: any) => {
    config.headers.authorization = `bearer ${localStorage.getItem("token")}`;
    return config;
};

const formDataInterceptors = (config: any) => {
    config.headers.authorization = `bearer ${localStorage.getItem("token")}`;
    config.headers.post["Content-Type"] = "multipart/form-data";
    return config;
};

$authHost.interceptors.request.use(authInterceptors);
$formDataAuthHost.interceptors.request.use(formDataInterceptors);
export { $authHost, $host, $formDataAuthHost };
