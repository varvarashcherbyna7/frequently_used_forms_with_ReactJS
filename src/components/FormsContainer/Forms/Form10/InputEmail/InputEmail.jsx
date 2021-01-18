import React from "react"
import "./InputEmail_main.sass"

const InputEmail = (props) => {
    return   (
        <div className="inputEmailForm10">
            <input type="email"
                   placeholder='E-mail'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.email && props.touched.email ? "errorsForm10" : null}
            />
            {props.errors.email && props.touched.email && (
                <div className="inputFeedbackForm10">{props.errors.email}</div>
            )}
        </div>
    )
};
export default InputEmail;