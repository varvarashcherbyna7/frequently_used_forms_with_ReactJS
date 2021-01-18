import React from "react"
import "./LastNameInput_main.sass"

const LastNameInput = (props) => {
    return (
        <div className="lastNameInputForm9">
            <input type="text"
                   placeholder='Last name'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.l_name && props.touched.l_name ? "errorsForm9" : null}/>
            {props.errors.l_name && props.touched.l_name && (
                <div className="inputFeedbackForm9">{props.errors.l_name}</div>
            )}
        </div>
    )
};
export default LastNameInput;