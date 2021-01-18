import React from "react"
import "./CheckboxInputs_main.sass"

const CheckboxTermsService = (props) => {
    return (
            <div className="checkboxFormRegistration">
                <input
                    id="checkbox_1"
                    name="choose"
                    value={props.value}
                    type={props.type}
                    checked={props.checked}
                />
                <label htmlFor="checkbox_1" className="labelCheckboxFormRegistration">
                    <span className="textFormRegistration">{props.value}</span>
                </label>
            </div>
    )
};

export default CheckboxTermsService;