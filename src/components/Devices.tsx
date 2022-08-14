import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import DeviceItem from "./DeviceItem";
import "../styles/Devices.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const devices = observer((props: Props) => {
    const DeviceStore = useContext(StoreContext).DeviceStore;
    const navigate = useNavigate();

    const handleDeviceClick = (id: number) => {
        // do the api call
        console.log("handleClick");
        navigate(`/device/${id}`);
    };
    return (
        <div className="devices__container">
            {DeviceStore._devices.map((device: any) => (
                <DeviceItem
                    img={device.img}
                    onClick={handleDeviceClick}
                    key={device.id}
                    name={device.name}
                    id={device.id}
                    price={device.price}
                    rating={device.rating}
                />
            ))}
        </div>
    );
});

export default devices;
