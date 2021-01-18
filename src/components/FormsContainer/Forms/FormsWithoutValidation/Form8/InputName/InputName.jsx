import React from "react"
import "./InputName_main.sass"

const InputName = (props) => {
    return (
        <div className="inputNameForm8">
            <span>Your name</span>
            <input type="text"
                   placeholder=""
                   name="name"
            />
            <i className="fas fa-user-alt"/>
        </div>
    )
};

export default InputName;