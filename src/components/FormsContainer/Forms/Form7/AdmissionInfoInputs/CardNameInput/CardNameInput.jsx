import React from "react"
import "./CardNameInput_main.sass"

const CardNameInput = (props) => {
    return (
        <div className="cardNameInputForm7">
            <input type="text"
                   placeholder='Name on card'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.nameOnCard && props.touched.nameOnCard ? "errorsCardNameForm7" : null}

            />
            {props.errors.nameOnCard && props.touched.nameOnCard && (
                <div className="inputFeedbackCardNameForm7">{props.errors.nameOnCard}</div>
            )}
        </div>
    )
};

export default CardNameInput;