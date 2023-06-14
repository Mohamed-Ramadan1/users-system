import React from "react";
import styeles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={styeles.button }>
            <button type={props.type || 'button'}>{ props.children}</button>
        </div>
    )
}

export default Button;
