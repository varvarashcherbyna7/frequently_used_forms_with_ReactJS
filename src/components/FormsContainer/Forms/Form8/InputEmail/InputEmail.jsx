import React from "react"
import "./InputEmail_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputEmailForm8">
            <span>Your email</span>
            <input type="email"
                   placeholder=""
                   name="email"
                   value={props.email}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.email && props.touched.email ? "errorsForm8" : null}
            />
            {props.errors.email && props.touched.email && (
                <div className="inputFeedbackForm8">{props.errors.email}</div>
            )}
            <i className="fas fa-envelope-open-text"/>
        </div>
    )
};

export default InputEmail;