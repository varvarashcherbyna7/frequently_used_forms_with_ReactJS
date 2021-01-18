import React from "react"
import "./InputsInformation_main.sass"

const InputCompany = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="far fa-building"/>
            <input type="text"
                   placeholder="company"
                   name="company"
            />
        </div>
    )
};

export default InputCompany;