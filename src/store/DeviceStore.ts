import { makeAutoObservable } from "mobx";
import { Brand, Device, Type } from "../types";

export default class DeviceStore {
    _types: Array<Type>;
    _brands: Array<Brand>;
    _devices: Array<Device>;
    _selectedType: number | null;
    _selectedBrand: number | null;
    _page: number;
    _totalCount: number;
    _limit: number;

    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._selectedBrand = null;
        this._selectedType = null;
        this._totalCount = 0;
        this._page = 1;
        this._limit = 9;
        makeAutoObservable(this);
    }

    setTypes(types: Array<Type>) {
        this._types = types;
    }

    setBrands(brands: Array<Brand>) {
        this._brands = brands;
    }

    setSelectedType(selectedType: number) {
        this._selectedType = selectedType;
    }

    setSelectedBrand(selectedBrand: number) {
        this._selectedBrand = selectedBrand;
    }

    setDevices(devices: Array<Device>) {
        this._devices = devices;
    }

    setPage(page: number) {
        this._page = page;
    }

    setTotalCount(totalCount: number) {
        this._totalCount = totalCount;
    }

    get devices() {
        return this._devices;
    }
    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}
