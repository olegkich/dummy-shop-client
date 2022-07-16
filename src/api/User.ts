import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { User } from "../types";
import { $host } from "./Index";

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

        return response;
    } catch (error: any) {
        return { message: error.response.data.message };
    }
};
