import React from "react";
import "./Button.css";
type Props = {
    text: string;
};

const Button = (props: Props) => {
    return <span className="button">{props.text}</span>;
};

export default Button;
