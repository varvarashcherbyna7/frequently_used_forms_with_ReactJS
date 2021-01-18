import React from "react"
import "./InputPhone_main.sass"

const InputPhone = (props) => {
    return (
        <div className="inputPhoneForm8">
            <span>Phone/Mobile</span>
            <input type="tel"
                   placeholder=""
                   name="phone"
                   value={props.phone}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.phone && props.touched.phone ? "errorsForm8" : null}
            />
            {props.errors.phone && props.touched.phone && (
                <div className="inputFeedbackForm8">{props.errors.phone}</div>
            )}
            <i className="fas fa-phone"/>
        </div>
    )
};

export default InputPhone;