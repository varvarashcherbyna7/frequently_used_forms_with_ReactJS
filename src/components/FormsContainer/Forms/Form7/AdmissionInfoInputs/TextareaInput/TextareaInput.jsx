import React from "react"
import "./TextareaInput_main.sass"

const TextareaInput = (props) => {
    return (
        <div className= "inputDivTextareaForm7" >
            <textarea
                      cols="30" rows="8"
                      placeholder='Admission info'
                      name={props.name}
                      onChange={props.handleChange}
                      value={props.value}
                      onBlur={props.handleBlur}
                      className={props.errors.admissionInfo && props.touched.admissionInfo ? "errorsTextareaForm7" : null}
            />
            {props.errors.admissionInfo && props.touched.address && (
                <div className = "inputFeedbackTextareaForm7" >{props.errors.admissionInfo}</div>
            )}
        </div>
    )
};

export default TextareaInput;