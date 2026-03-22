import React from "react";

const Badge = ({extraClasses, text}) =>{
    return (
        <span class={`badge ${extraClasses}`}>{text}</span>
    )
}

export default Badge;