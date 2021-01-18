import React from "react"
import "./Inputs_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputDivForm1">
            <div className="inputTextDivForm1">E-mail:</div>
            <div className="containerInputFieldForm1">
                <input type="email"
                       placeholder=''
                       name="email"
                />
            </div>
        </div>
    )
};

export default InputEmail;