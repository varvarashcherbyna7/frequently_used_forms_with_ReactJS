import React from "react"
import "./InformationPersonInputs_main.sass"

const LastNameInput = (props) => {
    return (
        <div className="informationPersonInputForm7 nameInputForm7">
            <input type="text"
                   placeholder='Last name'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.l_name && props.touched.l_name ? "errorsForm7" : null}
            />
            {props.errors.l_name && props.touched.l_name && (
                <div className="inputFeedbackForm7">{props.errors.l_name}</div>
            )}
        </div>
    )
};
export default LastNameInput;