import axios, { AxiosResponse } from "axios";
import { Brand } from "../types";
import { $host } from "./Index";

export const getBrands = async (): Promise<Brand[]> => {
    const response = await $host.get("brands/");
    return response.data;
};
