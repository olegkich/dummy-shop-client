import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import "../styles/DeviceCreator.css";
import { Device, Info } from "../types";
import shortid from "shortid";
import InfoCreator from "./InfoCreator";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { type } from "@testing-library/user-event/dist/type";
import { postDevice } from "../api/Devices";

type Props = {};

function isPositiveInteger(str: string) {
    if (typeof str !== "string") {
        return false;
    }

    const num = Number(str);

    if (Number.isInteger(num) && num > 0) {
        return true;
    }

    return false;
}

const DeviceCreator = observer((props: Props) => {
    const { types, brands } = useContext(StoreContext).DeviceStore;
    const [showPopup, setShowPopup] = useState(false);
    const [info, setInfo] = useState<Array<Info>>([]);

    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [file, setFile] = useState<File>();
    const [selectedType, setSelectedType] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string>("");

    const handleSelectedType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(e.currentTarget.value);
    };

    const handleSelectedBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBrand(e.currentTarget.value);
    };

    const handlePriceChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        isKeyDown?: boolean
    ) => {
        if (
            isPositiveInteger(e.currentTarget.value) &&
            e.currentTarget.value.length < 10
        ) {
            setPriceInput(e.currentTarget.value);
        }
    };

    const priceOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            setPriceInput("");
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length < 45) {
            setNameInput(e.currentTarget.value);
        }
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.currentTarget.files![0]);
    };

    const handleSubmit = async () => {
        const deviceUpload: Device = {
            name: nameInput,
            price: Number(priceInput),
            img: file!,
            info: info,
            typeId: toJS(types.filter((i) => i.name === selectedType))[0].id,
            brandId: toJS(brands.filter((i) => i.name === selectedBrand))[0].id,
        };

        const data = new FormData();
        data.append("name", nameInput);
        data.append("price", priceInput);
        data.append("image", file!, file?.name);
        for (const i of info) {
            data.append(
                "info",
                `{"title": "${i.title.toString()}", "description": "${i.description.toString()}"}`
            );
            console.log(
                `{"title": "${i.title.toString()}", "description": "${i.description.toString()}"}`
            );
        }
        data.append(
            "brandId",
            String(toJS(brands.filter((i) => i.name === selectedBrand))[0].id)
        );
        data.append(
            "typeId",
            String(toJS(types.filter((i) => i.name === selectedType))[0].id)
        );

        await postDevice(data);
    };
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

                <input
                    type="file"
                    onChange={onFileChange}
                    className="deviceCreator__item"
                    id="file"
                />
            </div>
            <input
                value={nameInput}
                onChange={handleNameChange}
                placeholder="Your device name"
                className="deviceCreator__item"
            />

            <input
                value={priceInput}
                onChange={handlePriceChange}
                onKeyDown={priceOnKeyDown}
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
            <select
                className="deviceCreator__item"
                value={selectedType}
                onChange={handleSelectedType}
            >
                <option value="">Choose your type</option>
                {types.map((type) => (
                    <option value={type.name}>{type.name}</option>
                ))}
            </select>
            <select
                className="deviceCreator__item"
                value={selectedBrand}
                onChange={handleSelectedBrand}
            >
                <option value="">Choose your brand</option>
                {brands.map((brand) => (
                    <option value={brand.name}>{brand.name}</option>
                ))}
            </select>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
});

export default DeviceCreator;
