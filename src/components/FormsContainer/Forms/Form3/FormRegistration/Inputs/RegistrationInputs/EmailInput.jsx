import React from "react"
import "./RegistrationInputs_main.sass"

const EmailInput = (props) => {
    return (
        <div className="inputContainerForm3">
            <i className="fas fa-at"/>
            <input type="email"
                   name="email"
                   placeholder='Email address'
                   value={props.values.email}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.email && props.touched.email && "errorForm3"}
            />
            {props.errors.email && props.touched.email && (
                <div className="inputFeedbackForm3">{props.errors.email}</div>
            )}
        </div>
    )
};

export default EmailInput;