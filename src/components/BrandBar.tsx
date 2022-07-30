import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import "../styles/BrandBar.css";

type Props = {};

const BrandBar = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);

    const handleBrandSelect = (id: number) => {
        DeviceStore.setSelectedBrand(id);
    };
    return (
        <div className="brand__container">
            {DeviceStore.brands.map((brand) => {
                return (
                    <span
                        className="brand__container-item"
                        onClick={() => handleBrandSelect(brand.id)}
                    >
                        {brand.name}
                    </span>
                );
            })}
        </div>
    );
});

export default BrandBar;
