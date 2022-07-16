import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { StoreProvider } from "./store/StoreProvider";
import RootStore from "./store/RootStore";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <StoreProvider store={new RootStore()}>
            <App />
        </StoreProvider>
    </React.StrictMode>
);
