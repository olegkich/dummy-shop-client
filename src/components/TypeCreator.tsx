import React from "react";
import "../styles/TypeCreator.css";

type Props = {};

const TypeCreator = (props: Props) => {
    return (
        <div className="typeCreator">
            <h3 className="typeCreator__item">Create a type</h3>
            <input
                placeholder="Enter your type"
                className="typeCreator__item"
            />
            <button className="typeCreator__item">Create</button>
        </div>
    );
};

export default TypeCreator;
