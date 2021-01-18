import React from "react"
import "./InformationPersonInputs_main.sass"

const EmailInput = (props) => {
    return   (
        <div className="informationPersonInputForm7">
            <input type="email"
                   placeholder='E-mail'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.email && props.touched.email ? "errorsForm7" : null}
            />
            {props.errors.email && props.touched.email && (
                <div className="inputFeedbackForm7">{props.errors.email}</div>
            )}
        </div>
    )
};
 export default EmailInput;