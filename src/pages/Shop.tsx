import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import BrandBar from "../components/BrandBar";

import TypeBar from "../components/TypeBar";
import { StoreContext } from "../store/StoreProvider";
import Devices from "../components/Devices";
import "../styles/Shop.css";
import { getDevices } from "../api/Devices";
import { Device } from "../types";

type Props = {};

const Shop = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);

    useEffect(() => {
        (async function () {
            const devices: Array<Device> = await getDevices(
                DeviceStore.selectedType.id,
                DeviceStore.selectedBrand.id,
                9
            );

            await DeviceStore.setDevices(devices);
        })();
    }, [DeviceStore.selectedBrand, DeviceStore.selectedType]);
    return (
        <div className="shop">
            <TypeBar />
            <div className="shop__devices_container">
                <BrandBar />
                <Devices />
            </div>
        </div>
    );
});

export default Shop;
