import React from "react"
import "./InformationPersonInputs_main.sass"

const PhoneInput = (props) => {
    return (
        <div className="informationPersonInputForm7">
            <input type="tel"
                   placeholder='Phone'
                   name={props.name}
            />
        </div>
    )
};
export default PhoneInput;