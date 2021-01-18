import React from "react"
import "../InputsRandomer_main.sass"

const InputKey = (props) => {
    return (
        <div className="keyInput">
                <input type="text"
                       autoComplete={"off"}
                       name={props.name}
                       placeholder='Enter the key'
                       onChange={props.handleChange}
                       value={props.value}
                       onBlur={props.handleBlur}
                       className={props.errors.enterKey && props.touched.enterKey ? "errorsForm5" : null}
                />
            {props.errors.enterKey && props.touched.enterKey && (
                <div className="inputFeedbackForms5">{props.errors.enterKey}</div>
            )}
        </div>
    )
};

export default InputKey;