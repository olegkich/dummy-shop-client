import { $host } from "./Index";

export const getDevices = async (
    typeId: number | null,
    brandId: number | null,
    limit: number
) => {
    const response = await $host.post("devices/get/", {
        brandId,
        typeId,
        limit,
    });
    console.log(response, "res");
    return response.data;
};
