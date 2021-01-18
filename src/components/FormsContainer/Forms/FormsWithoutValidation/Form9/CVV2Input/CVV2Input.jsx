import React from "react"
import "./CVV2Input_main.sass"

const CVV2Input = (props) => {
    return (
        <div className="cardCodeDivForm9">
            <input type="text"
                   placeholder='CVV2'
                   name={props.name}
            />
        </div>
    )
};

export default CVV2Input;