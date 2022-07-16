import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

type Props = {};

const Auth = (props: Props) => {
    const [isLogin, setIsLogin] = React.useState(false);

    return (
        <div style={{ height: "100vh" }}>
            {isLogin ? <Login /> : <Signup />}
        </div>
    );
};

export default Auth;
