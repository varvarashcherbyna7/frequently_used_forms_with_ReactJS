import React from "react"
import "./PhoneInput_main.sass"

const PhoneInput = (props) => {
    return (
        <div className="phoneInputForm9">
            <input type="tel"
                   placeholder='Phone'
                   name={props.name}/>
        </div>
    )
};
export default PhoneInput;