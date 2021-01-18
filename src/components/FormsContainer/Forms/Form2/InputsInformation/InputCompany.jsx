import React from "react"
import "./InputsInformation_main.sass"

const InputCompany = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="far fa-building"/>
            <input type="text"
                   placeholder="company"
                   name="company"
                   onChange={props.handleChange}
                   value={props.company}
                   onBlur={props.handleBlur}
                   className={props.errors.company && props.touched.company ? "errorsForm2" : null}
            />
            {props.errors.company && props.touched.company && (
                <div className="inputFeedbackForm2">{props.errors.company}</div>
            )}
        </div>
    )
};

export default InputCompany;