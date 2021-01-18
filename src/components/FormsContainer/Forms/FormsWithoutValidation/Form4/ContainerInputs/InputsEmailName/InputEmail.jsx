import React from "react"
import "./InputsEmailName_main.sass"
import "./InputsEmailName_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputContainerForm4">
            <i className="fas fa-envelope"/>
            <div className="nameEmailDivForm4">
                <div className="inputTextForm4">E-mail</div>
                <div className="inputDivForm4">
                    <input type="email"
                           name='email'
                    />
                </div>
            </div>
        </div>
    )
};

export default InputEmail;