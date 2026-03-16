import React from "react";

const Card = ({cardImg, cardText}) => {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={cardImg} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-text">{cardText}</p>
                </div>
        </div>
    )
}

export default Card;