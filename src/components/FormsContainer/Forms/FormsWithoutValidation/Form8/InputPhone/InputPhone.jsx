import React from "react"
import "./InputPhone_main.sass"

const InputPhone = (props) => {
    return (
        <div className="inputPhoneForm8">
            <span>Phone/Mobile</span>
            <input type="tel"
                   placeholder=""
                   name="phone"
            />
            <i className="fas fa-phone"/>
        </div>
    )
};

export default InputPhone;