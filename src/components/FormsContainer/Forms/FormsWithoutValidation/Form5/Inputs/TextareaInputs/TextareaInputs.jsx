import React from "react"
import "./TextareaInputs_main.sass"

const TextareaInputs = (props) => {
    return (
                <div className="textareaInputContainer">
                    <div className="textareaInputText">Message
                        <span className="textareaImgDiv">
                            <img src={props.starImg} alt="starImage"/>
                        </span>
                    </div>
                    <div className="textareaInputDiv">
                        <textarea cols="30" rows="10"
                                  placeholder='Type your message in here'
                                  name="message"
                        />
                    </div>
                </div>
    )
};

export default TextareaInputs;