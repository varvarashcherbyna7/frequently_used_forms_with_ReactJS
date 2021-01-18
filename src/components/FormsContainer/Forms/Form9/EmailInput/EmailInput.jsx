import React from "react"
import "./EmailInput_main.sass"

const EmailInput = (props) => {
    return   (
        <div className="inputEmailForm9">
            <input type="email"
                   placeholder='E-mail'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.email && props.touched.email ? "errorsForm9" : null}/>
            {props.errors.email && props.touched.email && (
                <div className="inputFeedbackForm9">{props.errors.email}</div>
            )}

        </div>
    )
};
 export default EmailInput;