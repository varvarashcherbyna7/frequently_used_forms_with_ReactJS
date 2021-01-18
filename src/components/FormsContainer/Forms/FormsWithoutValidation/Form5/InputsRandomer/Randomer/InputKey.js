import React from "react"
import "../InputsRandomer_main.sass"

const InputKey = (props) => {
    return (
        <div className="keyInput">
                <input type="text"
                       autoComplete={"off"}
                       placeholder='Enter the key'
                       onChange={props.handleChange}
                       value={props.value}
                       onBlur={props.handleBlur}
                />
        </div>
    )
};

export default InputKey;