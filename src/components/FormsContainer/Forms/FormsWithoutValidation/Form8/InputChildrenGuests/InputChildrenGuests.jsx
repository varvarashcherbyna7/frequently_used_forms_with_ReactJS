import React from "react"
import "./InputChildrenGuests_main.sass"

const InputChildrenGuests = (props) => {
    return (
        <div className="inputChildrenGuestsForm8">
            <span>Children guests</span>
            <input type="number"
                   placeholder=""
                   name="childrenQuests"
            />
            <div className="blockHintForm8">Number of children
                <span className="triangleForm8"/>
            </div>
            <i className="fas fa-child"/>
        </div>
    )
};

export default InputChildrenGuests;