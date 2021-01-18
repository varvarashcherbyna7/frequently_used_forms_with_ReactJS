import React from "react"
import "./InputsInformation_main.sass"

const InputName = (props) => {
    return (
            <div className="inputDivForm2">
                <i className="far fa-user"/>
                <input type="text"
                       placeholder="name"
                       name="name"
                />
            </div>
        )
};

export default InputName;