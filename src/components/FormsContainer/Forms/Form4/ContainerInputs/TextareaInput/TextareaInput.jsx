import React from "react"
import "./TextareaInput_main.sass"

const TextareaInput = (props) => {
    return (
        <div className="inputContainerForm4">
            <i className="fas fa-comment-dots"/>
            <div className="messageDivForm4">
                <div className="inputTextForm4">Message</div>
                <div className="inputDivForm4">
                    <textarea name="message" id="" cols="30" rows="5"
                              onChange={props.handleChange}
                              value={props.values}
                    />
                </div>
            </div>
        </div>

    )
};

export default TextareaInput;