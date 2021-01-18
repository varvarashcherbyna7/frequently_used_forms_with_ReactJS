import React from "react"
import "./CardNumberInput_main.sass"

const CardNumberInput = (props) => {
    return (
        <div className="cardDivForm7">
            <input type="number"
                   placeholder='Card number'
                   pattern={".{1,4}$|.{1,4}"}
                   name={props.name}
            />
        </div>
    )
};

export default CardNumberInput;