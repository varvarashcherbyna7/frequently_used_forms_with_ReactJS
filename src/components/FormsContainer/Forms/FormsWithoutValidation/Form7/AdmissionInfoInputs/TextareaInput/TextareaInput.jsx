import React from "react"
import "./TextareaInput_main.sass"

const TextareaInput = (props) => {
    return (
        <div className= "inputDivTextareaForm7" >
            <textarea
                      cols="30" rows="8"
                      placeholder='Admission info'
                      name={props.name}
            />
        </div>
    )
};

export default TextareaInput;