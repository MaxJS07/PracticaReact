import React from "react";

const Alert = ({alertType, text}) => {

    return (
        <div className={`alert ${alertType}`} role="alert">
            {text}
        </div>
    )
}

export default Alert;
