import React from "react"
import "./NameInputs_main.sass"

const NameInputs = (props) => {
    return (
        <div className="nameDivForm3">
            <div className="inputContainerForm3">
                <input type="text"
                       name='firstName'
                       placeholder='First name'
                       value=''
                />
            </div>
            <div className="inputContainerForm3">
                <input type="text"
                       name='lastName'
                       placeholder='Last name'
                       value=''
                />
            </div>
        </div>
    )
};

export default NameInputs;