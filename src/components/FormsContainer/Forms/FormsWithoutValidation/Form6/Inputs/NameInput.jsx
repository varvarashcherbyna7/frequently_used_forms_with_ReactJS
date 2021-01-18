import React from "react"
import "./Inputs_main.sass"

const NameInput = (props) => {
    return (
                <div className="inputContainerForm6">
                    <div className="inputTextForm6">Name</div>
                    <div className="inputDivForm6">
                        <i className="far fa-user"/>
                        <input type="text"
                               placeholder=''
                        />
                    </div>
                </div>
    )
};

export default NameInput;