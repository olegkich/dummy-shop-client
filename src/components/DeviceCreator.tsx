import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import "../styles/DeviceCreator.css";
import { Info } from "../types";
import shortid from "shortid";

type Props = {};

const DeviceCreator = (props: Props) => {
    const { types, brands } = useContext(StoreContext).DeviceStore;
    const [showPopup, setShowPopup] = useState(false);
    const [info, setInfo] = useState<Array<Info>>([]);
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [infoError, setInfoError] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.currentTarget.value);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescriptionValue(e.currentTarget.value);
    };

    const handleAddInfo = () => {
        if (descriptionValue == "" || titleValue == "") {
            setInfoError("no fields shoud be empty");
            return;
        }
        setInfoError("");
        setInfo([
            ...info,
            {
                title: titleValue,
                description: descriptionValue,
                id: shortid.generate(),
            },
        ]);

        setDescriptionValue("");
        setTitleValue("");
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
                <div className="deviceCreator__popup">
                    <div className="deviceCreator__popup-container">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <p>{infoError}</p>
                            <p
                                style={{
                                    cursor: "pointer",
                                    userSelect: "none",
                                }}
                                onClick={() => setShowPopup(false)}
                            >
                                x
                            </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                                placeholder="Title"
                                value={titleValue}
                                onChange={handleTitleChange}
                            />
                            =
                            <input
                                placeholder="Description"
                                value={descriptionValue}
                                onChange={handleDescriptionChange}
                            />
                            <button onClick={handleAddInfo}>add</button>
                        </div>
                        <ul style={{ overflowY: "scroll", maxHeight: "250px" }}>
                            {info.map((i) => (
                                <div className="deviceCreator__popup-info">
                                    <p
                                        style={{
                                            wordWrap: "break-word",
                                            width: "400px",
                                        }}
                                    >
                                        {i.title}: {i.description}
                                    </p>
                                    <p
                                        style={{
                                            cursor: "pointer",
                                            userSelect: "none",
                                        }}
                                        onClick={() =>
                                            setInfo([
                                                ...info.filter(
                                                    (j) => j.id !== i.id
                                                ),
                                            ])
                                        }
                                    >
                                        X
                                    </p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
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
