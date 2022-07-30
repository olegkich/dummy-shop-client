import React from "react";
import "../styles/DeviceInfo.css";
// @ts-ignore;
import image from "../assets/image.jpg";

type Props = {};

const dummyInfo = [
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
    { title: "test", desription: "bigger test filler object" },
];

const DeviceInfo = (props: Props) => {
    return (
        <div className="deviceInfo">
            <div className="deviceInfo__header">
                <h2>Samsung blahblahbah 30RTX quad-core megawatt</h2>
                <img src={image} className="deviceInfo__header-image" />
                <span>Price: 500$</span>
                <button>add to cart</button>
            </div>
            <div>
                <ul className="deviceInfo__info">
                    <h3>Tech Specs</h3>
                    {dummyInfo.map((info) => {
                        return (
                            <li className="deviceInfo__info-item">
                                <strong className="deviceInfo__info-title">
                                    {info.title}
                                </strong>{" "}
                                <p className="deviceInfo__info-description">
                                    {info.desription}
                                </p>
                                <hr />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DeviceInfo;
