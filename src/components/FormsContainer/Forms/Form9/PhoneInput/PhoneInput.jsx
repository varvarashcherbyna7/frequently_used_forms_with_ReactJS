import React from "react"
import "./PhoneInput_main.sass"

const PhoneInput = (props) => {
    return (
        <div className="phoneInputForm9">
            <input type="tel"
                   placeholder='Phone'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.phone && props.touched.phone ? "errorsForm9" : null}/>
            {props.errors.phone && props.touched.phone && (
                <div className="inputFeedbackForm9">{props.errors.phone}</div>
            )}
        </div>
    )
};
export default PhoneInput;