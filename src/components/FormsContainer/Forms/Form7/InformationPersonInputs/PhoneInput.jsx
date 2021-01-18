import React from "react"
import "./InformationPersonInputs_main.sass"

const PhoneInput = (props) => {
    return (
        <div className="informationPersonInputForm7">
            <input type="tel"
                   placeholder='Phone'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.phone && props.touched.phone ? "errorsForm7" : null}
            />
            {props.errors.phone && props.touched.phone && (
                <div className="inputFeedbackForm7">{props.errors.phone}</div>
            )}
        </div>
    )
};
export default PhoneInput;