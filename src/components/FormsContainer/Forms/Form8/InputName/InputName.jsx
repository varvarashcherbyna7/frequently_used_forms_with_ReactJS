import React from "react"
import "./InputName_main.sass"

const InputName = (props) => {
    return (
        <div className="inputNameForm8">
            <span>Your name</span>
            <input type="text"
                   placeholder=""
                   name="name"
                   value={props.name}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.name && props.touched.name ? "errorsForm8" : null}
            />
            <i className="fas fa-user-alt"/>
            {props.errors.name && props.touched.name && (
                <div className="inputFeedbackForm8">{props.errors.name}</div>
            )}
        </div>
    )
};

export default InputName;