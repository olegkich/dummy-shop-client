import axios, { AxiosResponse } from "axios";
import { Brand } from "../types";
import { $authHost, $host } from "./Index";

export const getBrands = async (): Promise<Brand[]> => {
    const response = await $host.get("brands/");
    return response.data;
};

export const createBrand = async (brandName: string) => {
    const response = await $authHost.post("brands/", {
        name: brandName,
    });

    return response.data;
};
