import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";
import "./App.css";
import { StoreContext } from "./store/StoreProvider";
import { getTypes } from "./api/Types";
import { getBrands } from "./api/Brands";
import { Brand, Type } from "./types";
import { toJS } from "mobx";

const App = observer(() => {
    const { DeviceStore } = useContext(StoreContext);

    useEffect(() => {
        (async function () {
            const types: Type[] = await getTypes();
            DeviceStore.setTypes(types);

            const brands: Brand[] = await getBrands();
            DeviceStore.setBrands(brands);
        })();
    }, []);
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
