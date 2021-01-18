import React from "react"
import "./InputsInformation_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="far fa-envelope"/>
            <input type="text"
                   placeholder="e-mail"
                   name="email"
            />
        </div>
    )
};

export default InputEmail;