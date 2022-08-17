import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

import "../styles/TypeBar.css";
import { observer } from "mobx-react-lite";
import { Type } from "../types";

type Props = {};

const TypeBar = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);

    const handleSelectType = (type: Type) => {
        DeviceStore.setSelectedType(type);
    };
    return (
        <div className="type__container">
            <p>Device Types</p>
            {DeviceStore.types.map((type) => {
                return (
                    <div
                        className="type__container-item"
                        onClick={() => handleSelectType(type)}
                    >
                        {type.name} {type.id}
                    </div>
                );
            })}
        </div>
    );
});

export default TypeBar;
