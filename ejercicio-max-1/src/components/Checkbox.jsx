import React from "react";

const Checkbox = ({id, label}) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={id}></input>
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Checkbox;