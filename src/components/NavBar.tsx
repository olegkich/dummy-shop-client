import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import "../styles/NavBar.css";
import Button from "./shared/Button";

type Props = {};

const NavBar = observer((props: Props) => {
    const { _isAuth } = useContext(StoreContext).UserStore;

    return (
        <div className="navbar">
            <ul className="navbar__links">
                <li>DummyShop LTD</li>
                <div className="navbar__links-container">
                    {_isAuth ? (
                        <Link to="/admin">
                            <Button text="Admin Panel" />
                        </Link>
                    ) : (
                        <Link to="/signup">
                            <Button text="Authorize" />
                        </Link>
                    )}
                </div>
            </ul>
        </div>
    );
});

export default NavBar;
