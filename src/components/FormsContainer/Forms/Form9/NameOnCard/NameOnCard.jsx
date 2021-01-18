import React from "react"
import "./NameOnCard_main.sass"

const NameOnCard = (props) => {
    return (
        <div className="cardNameInputForm9">
            <input type="text"
                   placeholder='Name on card'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.nameOnCard && props.touched.nameOnCard ? "errorsCardNameForm9" : null}
            />
            {props.errors.nameOnCard && props.touched.nameOnCard && (
                <div className="inputFeedbackCardNameForm9">{props.errors.nameOnCard}</div>
            )}
        </div>
    )
};

export default NameOnCard;