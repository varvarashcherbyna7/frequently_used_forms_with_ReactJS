import React from "react"
import "./CardNameInput_main.sass"

const CardNameInput = (props) => {
    return (
        <div className="cardNameInputForm7">
            <input type="text"
                   placeholder='Name on card'
                   name={props.name}
            />
        </div>
    )
};

export default CardNameInput;