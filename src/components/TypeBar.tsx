import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import Button from "./shared/Button";
import "../styles/TypeBar.css";
import { observer } from "mobx-react-lite";

type Props = {};

const TypeBar = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);

    const handleSelectType = (id: number) => {
        DeviceStore.setSelectedType(id);
    };
    return (
        <div className="type__container">
            <p>Device Types</p>
            {DeviceStore.types.map((type) => {
                return (
                    <div
                        className="type__container-item"
                        onClick={() => handleSelectType(type.id)}
                    >
                        {type.name} {type.id}
                    </div>
                );
            })}
        </div>
    );
});

export default TypeBar;
