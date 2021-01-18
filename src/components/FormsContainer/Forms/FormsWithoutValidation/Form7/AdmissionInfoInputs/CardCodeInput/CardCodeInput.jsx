import React from "react"
import "./CardCodeInput_main.sass"

const CardCodeInput = (props) => {
    return (
        <div className="cardCodeDivForm7">
            <input type="text"
                   placeholder='CVV2'
                   name={props.name}
            />
        </div>
    )
};

export default CardCodeInput;