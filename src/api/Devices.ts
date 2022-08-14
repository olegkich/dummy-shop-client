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

    return response.data;
};

export const getDeviceById = async (id: number) => {
    const response = await $host.get(`devices/${id}`);

    return response.data;
};
