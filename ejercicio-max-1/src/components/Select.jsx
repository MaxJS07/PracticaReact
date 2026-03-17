import React from "react";

const Select = ({ id, options }) => {

    return (
        <div className="mb-3">
            <select className="form-select" id={id}>
                <option value="">Seleccione una opción...</option>
                {options.map((opt) => {
                    return (
                        <option key={opt.value} value={opt.value}>
                            {opt.text}
                        </option>
                    )
                })}
            </select>
        </div>
    );

}

export default Select