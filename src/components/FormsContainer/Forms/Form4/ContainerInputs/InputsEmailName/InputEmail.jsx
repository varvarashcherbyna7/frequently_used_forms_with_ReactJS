import React from "react"
import "./InputsEmailName_main.sass"
import "./InputsEmailName_main.sass"

const InputEmail = (props) => {
    return (
        <div className="inputContainerForm4">
            <i className="fas fa-envelope"/>
            <div className="nameEmailDivForm4">
                <div className="inputTextForm4">E-mail</div>
                <div className="inputDivForm4">
                    <input type="email"
                           name='email'
                           onChange={props.handleChange}
                           value={props.values}
                           onBlur={props.handleBlur}
                           className={props.errors.email && props.touched.email && "errorForm4"}
                    />
                    {props.errors.email && props.touched.email && (
                        <div className="inputFeedbackForm4">{props.errors.email}</div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default InputEmail;