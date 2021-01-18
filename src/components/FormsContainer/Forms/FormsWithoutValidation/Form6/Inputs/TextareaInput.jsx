import React from "react"
import "./Inputs_main.sass"
import commentImg from "./img/comments.png"

const TextareaInput = (props) => {
    return (
            <div className="inputContainerForm6">
                <div className="inputTextForm6">Comments</div>
                <div className="inputDivForm6 commentDivForm6">
                    <textarea cols="30" rows="10"
                              placeholder=""
                    />
                    <img src={commentImg} alt="commentImg"/>
                </div>
            </div>
    )
};

export default TextareaInput;