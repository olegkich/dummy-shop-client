import React from "react";
import BrandCreator from "../components/BrandCreator";
import DeviceCreator from "../components/DeviceCreator";
import TypeCreator from "../components/TypeCreator";
import "../styles/Admin.css";

type Props = {};

const Admin = (props: Props) => {
    return (
        <div className="admin__container">
            <DeviceCreator />
            <div>
                <TypeCreator />
                <BrandCreator />
            </div>
        </div>
    );
};

export default Admin;
