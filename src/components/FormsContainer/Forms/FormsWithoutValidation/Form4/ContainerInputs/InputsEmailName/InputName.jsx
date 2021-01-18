import React from "react"
import "./InputsEmailName_main.sass"

const InputName = (props) => {
    return (
        <div className="inputContainerForm4">
            <i className="fas fa-user-circle"/>
            <div className="nameEmailDivForm4">
                <div className="inputTextForm4">Name</div>
                <div className="inputDivForm4">
                    <input type="text"
                           name='name'
                    />
                </div>
            </div>
        </div>

    )
};

export default InputName;