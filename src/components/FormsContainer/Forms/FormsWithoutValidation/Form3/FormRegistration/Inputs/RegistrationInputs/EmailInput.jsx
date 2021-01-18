import React from "react"
import "./RegistrationInputs_main.sass"

const EmailInput = (props) => {
    return (
        <div className="inputContainerForm3">
            <i className="fas fa-at"/>
            <input type="email"
                   name="email"
                   placeholder='Email address'
                   value=''
            />
        </div>
    )
};

export default EmailInput;