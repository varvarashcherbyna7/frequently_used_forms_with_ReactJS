import React from "react"
import "./InputAdultGuests_main.sass"

const InputAdultGuests = (props) => {
    return (
        <div className="inputAdultGuestsForm8">
            <span className="textInputAdultGuestsForm8">Adult guests</span>
            <input type="number"
                   placeholder=""
                   name="adultQuests"
                   value={props.adultQuests}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
            />
            <div className="blockHintForm8">Number of adult guests
                <span className="triangleForm8"/>
            </div>
            <i className="fas fa-user-friends"/>
        </div>
    )
};

export default InputAdultGuests;