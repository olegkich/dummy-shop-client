import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import "../styles/DeviceCreator.css";

type Props = {};

const DeviceCreator = (props: Props) => {
    const { types, brands } = useContext(StoreContext).DeviceStore;
    return (
        <div className="deviceCreator">
            <div
                style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h2 className="deviceCreator__item">Create A device</h2>

                <input type="file" className="deviceCreator__item" id="file" />
            </div>
            <input
                placeholder="Your device name"
                className="deviceCreator__item"
            />

            <input
                placeholder="Price in dollars"
                className="deviceCreator__item"
            />
            <select className="deviceCreator__item">
                <option value="">Choose your type</option>
                {types.map((type) => (
                    <option value={type.name}>{type.name}</option>
                ))}
            </select>
            <select className="deviceCreator__item">
                <option value="">Choose your brand</option>
                {brands.map((brand) => (
                    <option value={brand.name}>{brand.name}</option>
                ))}
            </select>
        </div>
    );
};

export default DeviceCreator;
