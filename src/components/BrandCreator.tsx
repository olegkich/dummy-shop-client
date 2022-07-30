import React from "react";
import "../styles/BrandCreator.css";

type Props = {};

const BrandCreator = (props: Props) => {
    return (
        <div className="brandCreator">
            <h3 className="brandCreator__item">Create a brand</h3>
            <input
                className="brandCreator__item"
                placeholder="Enter your brand"
            />
            <button className="brandCreator__item">create</button>
        </div>
    );
};

export default BrandCreator;
