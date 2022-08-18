import axios, { AxiosResponse } from "axios";
import { Type } from "../types";
import { $authHost, $host } from "./Index";

export const getTypes = async (): Promise<Type[]> => {
    const response = await $host.get("types/");
    return response.data;
};

export const createType = async (typeName: string) => {
    const response = await $authHost.post("types/", {
        name: typeName,
    });

    return response.data;
};
