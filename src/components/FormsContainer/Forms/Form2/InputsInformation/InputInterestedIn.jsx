import React from "react"
import "./InputsInformation_main.sass"

const InputInterestedIn = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="far fa-list-alt"/>
            <input type="text"
                   placeholder="interested In"
                   name="interestedIn"
                   onChange={props.handleChange}
                   value={props.interestedIn}
                   onBlur={props.handleBlur}
                   className={props.errors.interestedIn && props.touched.interestedIn ? "errorsForm2" : null}
            />
            {props.errors.interestedIn && props.touched.interestedIn && (
                <div className="inputFeedbackForm2">{props.errors.interestedIn}</div>
            )}
        </div>
    )
};

export default InputInterestedIn;