import React, { useEffect, useState } from "react";
import { deleteBasketItem, getBasketItems } from "../api/Basket";
import { REACT_APP_API_URL } from "../const";
import { Device } from "../types";
import "../styles/Basket.css";

type Props = {};

const Basket = (props: Props) => {
    const [items, setItems] = useState<Array<any>>([]);

    useEffect(() => {
        (async () => {
            setItems(await getBasketItems());
        })();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteBasketItem(id);
        setItems(await getBasketItems());
    };

    return (
        <div className="basket">
            <div className="basket__container">
                <h2>Your basket</h2>
                {items?.map((i) => (
                    <div className="basket__item">
                        <p>
                            <b>{i.device.name}</b> | price: {i.device.price}
                        </p>
                        <img
                            style={{ height: "3rem", borderRadius: "15px" }}
                            src={`${REACT_APP_API_URL}${i.device.img}`}
                            alt=""
                        />
                        <button onClick={() => handleDelete(i.id)}>
                            remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Basket;
