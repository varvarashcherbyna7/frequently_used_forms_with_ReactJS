import React from "react"
import "./InputsEmailName_main.sass"

const InputName = (props) => {
    return (
        <div className="inputContainerForm4">
            <i className="fas fa-user-circle"/>
            <div className="nameEmailDivForm4">
                <div className="inputTextForm4">Name</div>
                <div className="inputDivForm4">
                    <input type="text"
                           name='name'
                           onChange={props.handleChange}
                           value={props.values}
                           onBlur={props.handleBlur}
                           className={props.errors.name && props.touched.name && "errorForm4"}
                    />
                    {props.errors.name && props.touched.name && (
                        <div className="inputFeedbackForm4">{props.errors.name}</div>
                    )}
                </div>
            </div>
        </div>

    )
};

export default InputName;