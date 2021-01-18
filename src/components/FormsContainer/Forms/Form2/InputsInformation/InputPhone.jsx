import React from "react"
import "./InputsInformation_main.sass"

const InputPhone = (props) => {

    return (
        <div className="inputDivForm2">
            <i className="fas fa-mobile-alt"/>
            <input
                type="tel"
                placeholder="phone"
                name="phone"
                onChange={props.handleChange}
                value={props.phone}
                onBlur={props.handleBlur}
                className={props.errors.phone && props.touched.phone ? "errorsForm2" : null}
            />
            {props.errors.phone && props.touched.phone && (
                <div className="inputFeedbackForm2">{props.errors.phone}</div>
            )}
        </div>
    )
};

export default InputPhone;