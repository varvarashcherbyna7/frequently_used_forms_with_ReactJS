import React from "react"
import "./NameOnCard_main.sass"

const NameOnCard = (props) => {
    return (
        <div className="cardNameInputForm9">
            <input type="text"
                   placeholder='Name on card'
                   name={props.name}
            />
        </div>
    )
};

export default NameOnCard;