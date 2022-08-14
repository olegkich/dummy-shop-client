import React from "react";

// @ts-ignore;
import image from "../assets/image.jpg";
import { REACT_APP_API_URL } from "../const";

import "../styles/DeviceItem.css";

type Props = {
    name: string;

    id: number;
    price: number;
    rating: number;
    img: string;
    onClick: (id: number) => void;
};

const DeviceItem = (props: Props) => {
    return (
        <div className="device__item" onClick={() => props.onClick(props.id)}>
            <img
                src={`${REACT_APP_API_URL}${props.img}`}
                alt="Phone Image"
                className="device__item-image"
            />
            <p className="device__item-typebrand"></p>
            <p className="device__item-name">{props.name}</p>
            <div>
                <b style={{ marginRight: "0.3rem" }}>{props.price}$</b>
                <i>{props.rating}/10</i>
            </div>
        </div>
    );
};

export default DeviceItem;
