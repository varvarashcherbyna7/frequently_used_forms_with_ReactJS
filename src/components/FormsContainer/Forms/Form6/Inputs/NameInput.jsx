import React from "react"
import "./Inputs6_main.sass"

const NameInput = (props) => {
    return (
                <div className="inputContainerForm6">
                    <div className="inputTextForm6">Name</div>
                    <div className="inputDivForm6">
                        <i className="far fa-user"/>
                        <input type="text"
                               placeholder=''
                               name={props.name}
                               onChange={props.handleChange}
                               value={props.value}
                               onBlur={props.handleBlur}
                               className={props.errors.name && props.touched.name && "errorForm6"}
                        />
                        {props.errors.name && props.touched.name && (
                            <div className="inputFeedbackForm6">{props.errors.name}</div>
                        )}
                    </div>
                </div>
    )
};

export default NameInput;