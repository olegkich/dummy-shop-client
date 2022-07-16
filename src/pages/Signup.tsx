import { Button } from "@mui/material";
import axios, { Axios } from "axios";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signup } from "../api/User";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../const";
import { observer } from "mobx-react";
import { StoreContext } from "../store/StoreProvider";

type Props = {};

type FormValues = {
    email: string;
    password: string;
    repeatPassword: string;
};

const Signup = observer((props: Props) => {
    const UserStore = useContext(StoreContext).UserStore;
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();

    const [requestError, setRequestError] = useState("");
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const request: any = await signup(data.email, data.password);

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
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                    {...register("repeatPassword", {
                        required: true,
                        validate: (val: string) => {
                            if (watch("password") != val) {
                                return "Your passwords do no match";
                            }
                        },
                    })}
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                />
                {errors.repeatPassword && (
                    <span className="error">Password do not match</span>
                )}
            </div>
            <div className="form__field-container">
                <input type="submit" />
                <span className="error">{requestError}</span>
            </div>
            <div className="form__field-container">
                <span>
                    Have an account?
                    <Link
                        style={{
                            color: "blue",
                            textDecoration: "underline",
                            marginLeft: "0.5rem",
                        }}
                        to={LOGIN_ROUTE}
                    >
                        Log in
                    </Link>
                </span>
            </div>
        </form>
    );
});

export default Signup;
