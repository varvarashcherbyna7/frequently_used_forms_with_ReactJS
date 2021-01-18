import React from "react"
import "./RegistrationInputs_main.sass"

const UserNameInput = (props) => {
    return (
        <div className="inputContainerForm3">
            <i className="far fa-user"/>
            <input type="text"
                   name="username"
                   placeholder='Username'
                   value=''
            />
        </div>
    )
};

export default UserNameInput;