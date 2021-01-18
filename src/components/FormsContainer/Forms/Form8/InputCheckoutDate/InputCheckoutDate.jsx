import React from "react"
import "./InputCheckoutDate_main.sass"

const InputCheckoutDate = (props) => {
    return (
        <div className="inputCheckoutDateForm8">
            <span>Check-out date</span>
            <input type="text"
                   placeholder=""
                   name="checkOutDate"
                   value={props.checkOutDate}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.checkOutDate && props.touched.checkOutDate ? "errorsForm8" : null}
            />
            <div className="blockHintForm8">Format: mm-dd-yyyy
                <span className="triangleForm8"/>
            </div>

            {props.errors.checkOutDate && props.touched.checkOutDate && (
                <div className="inputFeedbackForm8">{props.errors.checkOutDate}</div>
            )}
            <i className="fas fa-calendar-alt"/>
        </div>
    )
};

export default InputCheckoutDate;