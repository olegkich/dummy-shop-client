import { $authHost, $host } from "./Index";

export const addToBasket = async (deviceId: number) => {
    const response = await $authHost.post("basket/", {
        deviceId,
    });

    console.log(await response);
    return response.data;
};

export const getBasketItems = async () => {
    const response = await $authHost.get("basket/");

    console.log(response, "response");
    return response.data;
};

export const deleteBasketItem = async (id: number) => {
    const response = await $authHost.delete(`basket/${id}`);

    return response.data;
};
