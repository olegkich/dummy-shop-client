import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SHOP_ROUTE } from "../const";
import { authRoutes, publicRoutes } from "../routes";
import { StoreContext } from "../store/StoreProvider";

const AppRouter = observer(() => {
    const { UserStore } = useContext(StoreContext);
    return (
        <Routes>
            {UserStore.isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={Component} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
});

export default AppRouter;
