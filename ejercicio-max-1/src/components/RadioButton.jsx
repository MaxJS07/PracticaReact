import React from "react";

const RadioButton = ({id, label, groupName}) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name={groupName} id={id}></input>
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton;