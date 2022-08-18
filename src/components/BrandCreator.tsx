import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { createBrand, getBrands } from "../api/Brands";
import { StoreContext } from "../store/StoreProvider";
import "../styles/BrandCreator.css";
import { Brand } from "../types";

type Props = {};

const BrandCreator = observer((props: Props) => {
    const { DeviceStore } = useContext(StoreContext);

    const [input, setInput] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const handleCreate = async () => {
        if (input.length === 0 || input.length > 20) {
            setMessage("invalid brand name");
            return;
        }
        await createBrand(input);
        setMessage("created a new brand");
        setInput("");

        const brands: Brand[] = await getBrands();
        DeviceStore.setBrands(brands);
    };

    return (
        <div className="brandCreator">
            <h3 className="brandCreator__item">Create a brand</h3>
            <input
                value={input}
                onChange={handleChange}
                className="brandCreator__item"
                placeholder="Enter your brand"
            />
            <button onClick={handleCreate} className="brandCreator__item">
                create
            </button>
            <p className="error">{message}</p>
        </div>
    );
});

export default BrandCreator;
