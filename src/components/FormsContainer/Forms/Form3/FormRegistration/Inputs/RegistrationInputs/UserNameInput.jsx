import React from "react"
import "./RegistrationInputs_main.sass"

const UserNameInput = (props) => {
    return (
        <div className="inputContainerForm3">
            <i className="far fa-user"/>
            <input type="text"
                   name="username"
                   placeholder='Username'
                   value={props.values.username}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   className={props.errors.username && props.touched.username && "errorForm3"}
            />
            {props.errors.username && props.touched.username && (
                <div className="inputFeedbackForm3">{props.errors.username}</div>
            )}
        </div>
    )
};

export default UserNameInput;