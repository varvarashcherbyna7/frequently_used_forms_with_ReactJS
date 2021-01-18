import React from "react"
import "./InputEmail_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputEmailForm8">
            <span>Your email</span>
            <input type="email"
                   placeholder=""
                   name="email"
            />
            <i className="fas fa-envelope-open-text"/>
        </div>
    )
};

export default InputEmail;