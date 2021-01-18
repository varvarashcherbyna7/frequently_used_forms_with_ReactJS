import React from "react"
import "./InputsInformation_main.sass"

const InputName = (props) => {
    return (
            <div className="inputDivForm2">
                <i className="far fa-user"/>
                <input type="text"
                       placeholder="name"
                       name="name"
                       onChange={props.handleChange}
                       value={props.name}
                       onBlur={props.handleBlur}
                       className={props.errors.name && props.touched.name ? "errorsForm2" : null}
                />
                {props.errors.name && props.touched.name && (
                    <div className="inputFeedbackForm2">{props.errors.name}</div>
                )}
            </div>
        )
};

export default InputName;