import React from 'react'
import "./InputsFileTextarea_main.sass"

const InputTextarea = (props) => {
    return (
            <div className="divTextareaForm2">
                    <textarea
                              placeholder="Tell us about your project"
                              name="textarea"
                              onChange={props.handleChange}
                              value={props.textarea}
                              onBlur={props.handleBlur}
                              className={props.errors.comment && props.touched.comment ? "errorsFileTextarea" : null}
                    />
                {props.errors.comment && props.touched.comment && (
                    <div className="inputFeedbackFileTextarea">{props.errors.comment}</div>
                )}
            </div>
        )
};

export default InputTextarea;