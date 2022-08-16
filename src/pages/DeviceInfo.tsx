import React, { useEffect, useState } from "react";
import "../styles/DeviceInfo.css";
// @ts-ignore;
import image from "../assets/image.jpg";
import { Device, Info } from "../types";
import { getDeviceById } from "../api/Devices";
import { useParams } from "react-router-dom";
import { REACT_APP_API_URL } from "../const";
import { addToBasket } from "../api/Basket";

type Props = {};

const DeviceInfo = (props: Props) => {
    const [isAddedToBasket, setIsAddedToBasket] = useState<boolean>(false);
    const { id } = useParams();
    const [device, setDevice] = useState<Device>();

    useEffect(() => {
        (async () => {
            console.log(id, "id");
            setDevice(await getDeviceById(Number(id)));

            console.log(await getDeviceById(Number(id)));
        })();
    }, []);

    const handleBasket = async () => {
        await addToBasket(Number(id));
        setIsAddedToBasket(true);
    };
    return (
        <>
            <div className="deviceInfo">
                <div className="deviceInfo__header">
                    <h2>
                        {device?.brand.name} {device?.type.name} {device?.name}
                    </h2>
                    <img
                        src={`${REACT_APP_API_URL}${device?.img}`}
                        className="deviceInfo__header-image"
                    />
                    <span>Price: {device?.price}$</span>
                    {localStorage.getItem("token") ? (
                        <button onClick={handleBasket}>
                            add to item to your basket
                        </button>
                    ) : null}
                    {isAddedToBasket ? (
                        <strong>Added this device to your basket</strong>
                    ) : null}
                </div>
                <div>
                    <ul className="deviceInfo__info">
                        <h3>Tech Specs</h3>
                        {device?.info?.map((info: Info) => {
                            return (
                                <li className="deviceInfo__info-item">
                                    <strong className="deviceInfo__info-title">
                                        {info.title}
                                    </strong>{" "}
                                    <p className="deviceInfo__info-description">
                                        {info.description}
                                    </p>
                                    <hr />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DeviceInfo;
