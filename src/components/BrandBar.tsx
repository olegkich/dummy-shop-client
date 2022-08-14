import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import "../styles/BrandBar.css";
import { Brand } from "../types";

type Props = {};

const BrandBar = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);

    const handleBrandSelect = (brand: Brand) => {
        DeviceStore.setSelectedBrand(brand);
    };
    return (
        <div className="brand__container">
            {DeviceStore.brands.map((brand) => {
                return (
                    <span
                        className="brand__container-item"
                        onClick={() => handleBrandSelect(brand)}
                    >
                        {brand.name}
                    </span>
                );
            })}
        </div>
    );
});

export default BrandBar;
