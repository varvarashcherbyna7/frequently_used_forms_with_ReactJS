import React from "react"
import "./CheckboxInputs_main.sass"

const CheckboxReceiveNews = (props) => {
    return (
            <div className="checkboxFormRegistration">
                <input
                    id="checkbox_2"
                    name="choose"
                    value={props.value}
                    type={props.type}
                    checked={props.checked}
                />
                <label htmlFor="checkbox_2" className="labelCheckboxFormRegistration">
                    <span className="textFormRegistration">{props.value}</span>
                </label>
            </div>
    )
};
export default CheckboxReceiveNews;