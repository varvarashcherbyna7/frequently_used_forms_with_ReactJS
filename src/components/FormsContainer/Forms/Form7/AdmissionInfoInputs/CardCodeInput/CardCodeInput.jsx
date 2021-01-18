import React from "react"
import "./CardCodeInput_main.sass"

const CardCodeInput = (props) => {
    return (
        <div className="cardCodeDivForm7">
            <input type="text"
                   placeholder='CVV2'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.codeNumber && props.touched.codeNumber ? "errorsCardCodeForm7" : null}
            />
            {props.errors.codeNumber && props.touched.codeNumber && (
                <div className="inputFeedbackCardCodeForm7">{props.errors.codeNumber}</div>
            )}
        </div>
    )
};

export default CardCodeInput;