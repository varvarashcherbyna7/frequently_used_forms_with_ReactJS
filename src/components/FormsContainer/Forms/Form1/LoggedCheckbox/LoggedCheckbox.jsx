import React from "react"
import "./LoggedCheckbox_main.sass"

const LoggedCheckbox = (props) => {
    return (
        <div className='checkbox'>
            <input id="contentFormCheckbox"
                   type="checkbox"
                   name="contentFormCheckbox"
                   onChange={props.handleChange}
                   checked={props.checked}
            />
            <label htmlFor="contentFormCheckbox" className="contentFormCheckboxText">
                <span className="contentFormCheckboxTextAgree">Keep me</span>
                <span className="colorText">Logged in</span>
            </label>
        </div>
    )
};

export default LoggedCheckbox;