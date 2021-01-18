import React from "react"
import "./InputCheckoutDate_main.sass"

const InputCheckoutDate = (props) => {
    return (
        <div className="inputCheckoutDateForm8">
            <span>Check-out date</span>
            <input type="text"
                   placeholder=""
                   name="checkOutDate"
            />
            <div className="blockHintForm8">Format: mm-dd-yyyy
                <span className="triangleForm8"/>
            </div>
            <i className="fas fa-calendar-alt"/>
        </div>
    )
};

export default InputCheckoutDate;