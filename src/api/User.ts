import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { User } from "../types";
import { $host } from "./Index";
import jwt_decode from "jwt-decode";

type apiError = {
    message: string;
};

export const signup = async (
    email: string,
    password: string
): Promise<apiError | AxiosResponse> => {
    try {
        const response = await $host.post("users/register/", {
            email,
            password,
            role: "ADMIN",
        });
        localStorage.setItem("token", response.data);

        return jwt_decode(response.data);
    } catch (error: any) {
        return { message: error.response.data.message };
    }
};

export const login = async (
    email: string,
    password: string
): Promise<apiError | AxiosResponse> => {
    try {
        const response = await $host.post("users/login/", {
            email,
            password,
        });
        localStorage.setItem("token", response.data);
        return jwt_decode(response.data);
    } catch (error: any) {
        return { message: error.response.data.message };
    }
};
