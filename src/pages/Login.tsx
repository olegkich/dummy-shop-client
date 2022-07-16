import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../api/User";
import { StoreContext } from "../store/StoreProvider";
import "./Form.css";

type Props = {};

type FormValues = {
    email: string;
    password: string;
};

const Login = observer((props: Props) => {
    const navigate = useNavigate();
    const UserStore = useContext(StoreContext).UserStore;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const [requestError, setRequestError] = useState("");
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const request: any = await login(data.email, data.password);

        if (request.message) {
            setRequestError(request.message);
            return;
        }

        UserStore.setUser(request);
        UserStore.setIsAuth(true);
        navigate("/");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__field-container">
                <label htmlFor="email">Your Email Address</label>

                <input
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Please enter a valid email",
                        },
                    })}
                    type="email"
                    name="email"
                    id="email"
                />
                {errors.email && <span className="error">Invalid Email</span>}
            </div>
            <div className="form__field-container">
                <label htmlFor="password">Enter a Password</label>
                <input
                    {...register("password", {
                        required: true,
                        min: 4,
                        max: 16,
                    })}
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            {errors.password && <span className="error">Invalid Password</span>}

            <div className="form__field-container">
                <input type="submit" />
                <span className="error">{requestError}</span>
            </div>
            <div className="form__field-container"></div>
        </form>
    );
});

export default Login;
