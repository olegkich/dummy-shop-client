import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    SHOP_ROUTE,
    LOGIN_ROUTE,
    DEVICE_ROUTE,
    SIGNUP_ROUTE,
} from "./const";
import Admin from "./pages/Admin";

import Basket from "./pages/Basket";
import Device from "./pages/DeviceInfo";
import Shop from "./pages/Shop";
import DeviceInfo from "./pages/DeviceInfo";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />,
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket />,
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop />,
    },
    {
        path: LOGIN_ROUTE,
        Component: <Login />,
    },
    {
        path: SIGNUP_ROUTE,
        Component: <Signup />,
    },
    {
        path: DEVICE_ROUTE + "/:id",
        Component: <DeviceInfo />,
    },
];
