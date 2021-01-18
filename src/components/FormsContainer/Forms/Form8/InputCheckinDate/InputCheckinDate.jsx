import React from "react"
import "./InputCheckinDate_main.sass"

const InputCheckinDate = (props) => {
    return (
        <div className="inputCheckinDateForm8">
            <span>Check-in date</span>
            <input type="text"
                   placeholder=""
                   name="checkInDate"
                   value={props.checkInDate}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.checkInDate && props.touched.checkInDate ? "errorsForm8" : null}
            />
            <div className="blockHintForm8">Format: mm-dd-yyyy
                <span className="triangleForm8"/>
            </div>
            {props.errors.checkInDate && props.touched.checkInDate && (
                <div className="inputFeedbackForm8">{props.errors.checkInDate}</div>
            )}
            <i className="fas fa-calendar-alt"/>
        </div>
    )
};

export default InputCheckinDate;