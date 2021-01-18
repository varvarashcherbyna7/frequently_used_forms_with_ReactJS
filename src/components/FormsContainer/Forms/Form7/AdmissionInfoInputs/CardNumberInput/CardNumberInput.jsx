import React from "react"
import "./CardNumberInput_main.sass"

const CardNumberInput = (props) => {
    return (
        <div className="cardDivForm7">
            <input type="number"
                   placeholder='Card number'
                   pattern={".{1,4}$|.{1,4}"}
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.cardNumber && props.touched.cardNumber ? "errorsCardForm7" : null}
            />
            {props.errors.cardNumber && props.touched.cardNumber && (
                <div className="inputFeedbackCardForm7">{props.errors.cardNumber}</div>
            )}
        </div>
    )
};

export default CardNumberInput;