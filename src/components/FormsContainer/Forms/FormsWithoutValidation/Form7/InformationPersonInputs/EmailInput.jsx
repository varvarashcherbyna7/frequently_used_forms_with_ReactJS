import React from "react"
import "./InformationPersonInputs_main.sass"

const EmailInput = (props) => {
    return   (
        <div className="informationPersonInputForm7">
            <input type="email"
                   placeholder='E-mail'
                   name={props.name}
            />
        </div>
    )
};
 export default EmailInput;