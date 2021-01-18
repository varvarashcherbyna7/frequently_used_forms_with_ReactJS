import React from "react"
import "./TextareaInputFeedbackMessage_main.sass"

const TextareaInputFeedbackMessage = (props) => {
    return (
        <div className= "inputDivTextareaForm10" >
            <textarea
                cols="30" rows="8"
                placeholder='Feedback message'
                // name={props.name}
                // onChange={props.handleChange}
                // value={props.value}
                // onBlur={props.handleBlur}
                // className={props.errors.admissionInfo && props.touched.admissionInfo ? "errorsTextareaForm10" : null}
            />
            {/*{props.errors.admissionInfo && props.touched.address && (*/}
            {/*    <div className = "inputFeedbackTextareaForm10" >{props.errors.admissionInfo}</div>*/}
            {/*)}*/}
        </div>
    )
};

export default TextareaInputFeedbackMessage;