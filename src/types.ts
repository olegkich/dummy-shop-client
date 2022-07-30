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
}
export interface User {}
