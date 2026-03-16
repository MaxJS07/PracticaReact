import React from "react";

const TextInput = ({ id, type, label, placeholder }) => {

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} placeholder={placeholder}></input>
        </div>
    )

}

export default TextInput;