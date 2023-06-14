import React from "react";
import styeles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={styeles.button}>
            <button type={props.type}>{ props.text}</button>
        </div>
    )
}

export default Button;
