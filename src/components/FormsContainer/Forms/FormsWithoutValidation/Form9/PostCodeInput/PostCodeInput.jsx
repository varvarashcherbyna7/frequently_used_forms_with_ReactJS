import React from "react"
import "./PostCodeInput_main.sass"

const PostCodeInput = (props) => {
    return (
        <div className="inputPostCodeForm9">
            <input type="text"
                   placeholder='Post code'
                   name={props.name}
            />
        </div>
    )
};

export default PostCodeInput;