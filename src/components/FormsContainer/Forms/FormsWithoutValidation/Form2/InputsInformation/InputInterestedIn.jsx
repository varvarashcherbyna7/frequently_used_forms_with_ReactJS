import React from "react"
import "./InputsInformation_main.sass"

const InputInterestedIn = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="far fa-list-alt"/>
            <input type="text"
                   placeholder="interested In"
                   name="interestedIn"
            />
        </div>
    )
};

export default InputInterestedIn;