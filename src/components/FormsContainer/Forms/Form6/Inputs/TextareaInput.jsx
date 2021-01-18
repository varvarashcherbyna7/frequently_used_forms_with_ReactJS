import React from "react"
import "./Inputs6_main.sass"
import commentImg from "./img/comments.png"

const TextareaInput = (props) => {
    return (
            <div className="inputContainerForm6">
                <div className="inputTextForm6">Comments</div>
                <div className="inputDivForm6 commentDivForm6">
                    <textarea cols="30" rows="10"
                              placeholder=""
                              name={props.name}
                              onChange={props.handleChange}
                              value={props.value}
                              onBlur={props.handleBlur}
                    />
                    <img src={commentImg} alt="commentImg"/>
                </div>
            </div>
    )
};

export default TextareaInput;