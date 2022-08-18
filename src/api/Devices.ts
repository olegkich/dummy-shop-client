import { $authHost, $formDataAuthHost, $host } from "./Index";

export const getDevices = async (
    typeId: number | null,
    brandId: number | null,
    limit: number
) => {
    const response = await $host.post("devices/get/", {
        brandId,
        typeId,
        limit: 20,
    });

    return response.data.rows;
};

export const getDeviceById = async (id: number) => {
    const response = await $host.get(`devices/${id}`);

    return response.data;
};

export const postDevice = async (data: any) => {
    try {
        console.log(data);
        const response = await $formDataAuthHost.post("devices/", data);
    } catch (err) {
        console.log(err);
    }
};
