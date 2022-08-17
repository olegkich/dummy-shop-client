import React, { Dispatch, SetStateAction, useState } from "react";
import shortid from "shortid";
import { Info } from "../types";

type Props = {
    onExit: () => void;
    info: Array<Info>;
    setInfo: Dispatch<SetStateAction<Info[]>>;
};

const InfoCreator = ({ onExit, info, setInfo }: Props) => {
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [infoError, setInfoError] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 60) {
            setInfoError("reached the maximum field length of 60 characters");
            return;
        }
        setTitleValue(e.currentTarget.value);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.currentTarget.value.length > 100) {
            setInfoError("reached the maximum field length of 60 characters");
            return;
        }
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
                        onClick={onExit}
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
                                        ...info.filter((j) => j.id !== i.id),
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
    );
};

export default InfoCreator;
