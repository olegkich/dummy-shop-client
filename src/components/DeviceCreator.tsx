import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import "../styles/DeviceCreator.css";
import { Info } from "../types";
import shortid from "shortid";
import InfoCreator from "./InfoCreator";

type Props = {};

const DeviceCreator = (props: Props) => {
    const { types, brands } = useContext(StoreContext).DeviceStore;
    const [showPopup, setShowPopup] = useState(false);
    const [info, setInfo] = useState<Array<Info>>([]);

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

            <button onClick={() => setShowPopup(true)}>
                Add/View device info
            </button>
            {showPopup ? (
                <InfoCreator
                    onExit={() => setShowPopup(false)}
                    info={info}
                    setInfo={setInfo}
                />
            ) : null}
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
