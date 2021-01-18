import React from "react"
import "./CheckboxInput_main.sass"

const CheckboxInput = (props) => {
    return (
            <div className="checkboxDivForm4">
                <input id="contentFormCheckbox"
                       type="checkbox"
                       value=''
                />
                <label htmlFor="contentFormCheckbox" className="labelCheckboxForm4">
                    <span className="textForm4">Send a copy to my e-mail address</span>
                </label>
            </div>
    )
};

export default CheckboxInput;