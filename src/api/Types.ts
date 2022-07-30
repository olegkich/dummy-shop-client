import axios, { AxiosResponse } from "axios";
import { Type } from "../types";
import { $host } from "./Index";

export const getTypes = async (): Promise<Type[]> => {
    const response = await $host.get("types/");
    return response.data;
};
