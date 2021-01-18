import React from "react"
import "./InputsInformation_main.sass"

const InputBudget = (props) => {
    return (
        <div className="inputDivForm2">
            <i className="fas fa-money-bill-wave"/>
            <input type="number"
                   placeholder="budget"
                   name="budget"
                   autoComplete="off"
            />
        </div>
    )
};

export default InputBudget;