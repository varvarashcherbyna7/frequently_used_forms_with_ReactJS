import React from "react"
import "./InputsInformation_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="far fa-envelope"/>
            <input type="text"
                   placeholder="e-mail"
                   name="email"
                   onChange={props.handleChange}
                   value={props.email}
                   onBlur={props.handleBlur}
                   className={props.errors.email && props.touched.email ? "errorsForm2" : null}
            />
            {props.errors.email && props.touched.email && (
                <div className="inputFeedbackForm2">{props.errors.email}</div>
            )}
        </div>
    )
};

export default InputEmail;