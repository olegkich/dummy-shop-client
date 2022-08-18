import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { createType, getTypes } from "../api/Types";

import { StoreContext } from "../store/StoreProvider";
import "../styles/TypeCreator.css";
import { Type } from "../types";

type Props = {};

const TypeCreator = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);
    const [input, setInput] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const handleCreate = async () => {
        if (input.length === 0 || input.length > 20) {
            setMessage("invalid type name");
            return;
        }
        await createType(input);
        setMessage("created a new type");
        setInput("");

        const types: Type[] = await getTypes();
        DeviceStore.setTypes(types);
    };
    return (
        <div className="typeCreator">
            <h3 className="typeCreator__item">Create a type</h3>
            <input
                onChange={handleChange}
                value={input}
                placeholder="Enter your type"
                className="typeCreator__item"
            />
            <button className="typeCreator__item" onClick={handleCreate}>
                Create
            </button>
            <p className="error">{message}</p>
        </div>
    );
});

export default TypeCreator;
