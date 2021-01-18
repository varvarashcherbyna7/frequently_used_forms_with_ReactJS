import React from "react"
import "./InputCheckinDate_main.sass"

const InputCheckinDate = (props) => {
    return (
        <div className="inputCheckinDateForm8">
            <span>Check-in date</span>
            <input type="text"
                   placeholder=""
                   name="checkInDate"
            />
            <div className="blockHintForm8">Format: mm-dd-yyyy
                <span className="triangleForm8"/>
            </div>
            <i className="fas fa-calendar-alt"/>
        </div>
    )
};

export default InputCheckinDate;