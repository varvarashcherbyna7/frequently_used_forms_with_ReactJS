import React from "react"
import "./EmailInput_main.sass"

const EmailInput = (props) => {
    return   (
        <div className="inputEmailForm9">
            <input type="email"
                   placeholder='E-mail'
                   name={props.name}
            />
        </div>
    )
};
 export default EmailInput;