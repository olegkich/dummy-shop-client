import { $authHost, $host } from "./Index";

export const addToBasket = async (deviceId: number) => {
    const response = await $authHost.post("basket/", {
        deviceId,
    });

    console.log(await response);
    return response.data;
};
