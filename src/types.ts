export interface Type {
    name: string;
    id: number;
}

export interface Brand {
    name: string;
    id: number;
}

export interface Device {
    name: string;
    img: string;
    typeId: number;
    brandId: number;
    info?: Info[];
    price: number;
    brand: Brand;
    type: Type;
}
export interface User {}

export interface Info {
    title: string;
    description: string;
    id?: string;
}
