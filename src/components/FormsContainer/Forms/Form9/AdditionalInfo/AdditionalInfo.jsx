import React from "react"
import "./AdditionalInfo_main.sass"

const AdditionalInfo = (props) => {
    return (
        <div className= "inputDivTextareaForm9" >
            <textarea
                cols="30" rows="8"
                placeholder='Admission info'
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
                onBlur={props.handleBlur}
                className={props.errors.admissionInfo && props.touched.admissionInfo ? "errorsTextareaForm9" : null}
            />
            {props.errors.admissionInfo && props.touched.address && (
                <div className = "inputFeedbackTextareaForm9" >{props.errors.admissionInfo}</div>
            )}
        </div>
    )
};

export default AdditionalInfo;