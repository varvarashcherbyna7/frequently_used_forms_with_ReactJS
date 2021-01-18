import React from "react"
import "./Inputs6_main.sass"

const EmailInput = (props) => {
    return (
                <div className="inputContainerForm6">
                    <div className="inputTextForm6">E-mail</div>
                    <div className="inputDivForm6 inputEmailDivForm6">
                        <i className="far fa-envelope"/>
                        <input type="email"
                               placeholder=''
                               name={props.name}
                               onChange={props.handleChange}
                               value={props.value}
                               onBlur={props.handleBlur}
                               className={props.errors.email && props.touched.email && "errorForm6"}
                        />
                        {props.errors.email && props.touched.email && (
                            <div className="inputFeedbackForm6">{props.errors.email}</div>
                        )}
                    </div>
                </div>
    )
};

export default EmailInput;