import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import "../styles/NavBar.css";

type Props = {};

const NavBar = observer((props: Props) => {
    const { _isAuth } = useContext(StoreContext).UserStore;

    return (
        <div className="navbar">
            <ul className="navbar__links">
                <li>DummyShop LTD</li>
                <div className="navbar__links-container">
                    {_isAuth ? (
                        <>
                            <Link to="/admin">
                                <button className="navbar__button">
                                    Admin Panel
                                </button>
                            </Link>
                            <Link to="/basket">
                                <button className="navbar__button">
                                    Basket
                                </button>
                            </Link>
                        </>
                    ) : (
                        <Link to="/signup">
                            <button className="navbar__button">
                                Authorize
                            </button>
                        </Link>
                    )}
                </div>
            </ul>
        </div>
    );
});

export default NavBar;
