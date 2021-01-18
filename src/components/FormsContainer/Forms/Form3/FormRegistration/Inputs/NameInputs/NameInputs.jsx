import React from "react"
import "./NameInputs_main.sass"

const NameInputs = (props) => {
    return (
        <div className="nameDivForm3">
            <div className="inputContainerForm3">
                <input type="text"
                       name='firstName'
                       placeholder='First name'
                       value={props.values.firstName}
                       onChange={props.handleChange}
                       onBlur={props.handleBlur}
                       className={props.errors.firstName && props.touched.firstName && "errorForm3"}
                />
                {props.errors.firstName && props.touched.firstName && (
                    <div className="inputFeedbackForm3">{props.errors.firstName}</div>
                )}
            </div>
            <div className="inputContainerForm3">
                <input type="text"
                       name='lastName'
                       placeholder='Last name'
                       value={props.values.lastName}
                       onChange={props.handleChange}
                       onBlur={props.handleBlur}
                       className={props.errors.lastName && props.touched.lastName && "errorForm3"}
                />
                {props.errors.lastName && props.touched.lastName && (
                    <div className="inputFeedbackForm3">{props.errors.lastName}</div>
                )}
            </div>
        </div>
    )
};

export default NameInputs;