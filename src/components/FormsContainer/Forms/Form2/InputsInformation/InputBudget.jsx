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
                   onChange={props.handleChange}
                   value={props.budget}
                   onBlur={props.handleBlur}
                   className={props.errors.budget && props.touched.budget ? "errorsForm2" : null}
            />
            {props.errors.budget && props.touched.budget && (
                <div className="inputFeedbackForm2">{props.errors.budget}</div>
            )}
        </div>
    )
};

export default InputBudget;