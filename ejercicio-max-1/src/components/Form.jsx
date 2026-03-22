import React, {useState} from "react";

const Form = ({fields, onSubmit}) =>{
    
    const InitialState = fields.reduce((acc, field) =>{
        acc[field.name] = field.type === "checkbox" ? false : "";
        return acc;
    }, {});

    const [formData, setFormData] = useState(InitialState);

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        onSubmit(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div className="mb-3" key={index}>
                    <label className={field.type === "checkbox" ? "form-check-label" : "form-label" } >
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        name={field.name}
                        className={field.type === "checkbox" ? "form-check-input" : "form-control" }
                        value={field.type !== "checkbox" ? formData[field.name] : undefined}
                        checked={field.type === "checkbox" ? formData[field.name] : undefined}
                        onChange={handleChange}
                    >
                    </input>
                </div>
            ))}
            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    )
}

export default Form;