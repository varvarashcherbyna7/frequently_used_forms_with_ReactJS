import React from "react"
import "./Inputs_main.sass"

const EmailInput = (props) => {
    return (
                <div className="inputContainerForm6">
                    <div className="inputTextForm6">E-mail</div>
                    <div className="inputDivForm6 inputEmailDivForm6">
                        <i className="far fa-envelope"/>
                        <input type="email"
                               placeholder=''
                        />
                    </div>
                </div>
    )
};

export default EmailInput;