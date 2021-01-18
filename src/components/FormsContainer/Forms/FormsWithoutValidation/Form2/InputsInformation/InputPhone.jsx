import React from "react"
import "./InputsInformation_main.sass"

const InputPhone = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="fas fa-mobile-alt"/>
            <input
                type="tel"
                placeholder="phone"
                name="phone"
            />
        </div>
    )
};

export default InputPhone;