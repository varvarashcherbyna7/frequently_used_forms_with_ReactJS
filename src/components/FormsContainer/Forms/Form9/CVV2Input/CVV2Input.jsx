import React from "react"
import "./CVV2Input_main.sass"

const CVV2Input = (props) => {
    return (
        <div className="cardCodeDivForm9">
            <input type="text"
                   placeholder='CVV2'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.codeNumber && props.touched.codeNumber ? "errorsCardCodeForm9" : null}
            />
            {props.errors.codeNumber && props.touched.codeNumber && (
                <div className="inputFeedbackCardCodeForm9">{props.errors.codeNumber}</div>
            )}
        </div>
    )
};

export default CVV2Input;