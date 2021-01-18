import React from "react"
import "./FirstnameInput_main.sass"

const FirstNameInput = (props) => {
    return (
        <div className="inputFirstNameForm9">
            <input type="text"
                   placeholder='First name'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.f_name && props.touched.f_name ? "errorsForm9" : null}/>
            {props.errors.f_name && props.touched.f_name && (
                <div className="inputFeedbackForm9">{props.errors.f_name}</div>
            )}
        </div>
    )
};

export default FirstNameInput;