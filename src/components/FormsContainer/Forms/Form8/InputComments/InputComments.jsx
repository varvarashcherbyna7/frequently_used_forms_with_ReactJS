import React from "react"
import "./InputComments_main.sass"

const InputComments = (props) => {
    return (
        <div className="inputCommentsForm8">
            <span>Comments/Message</span>
            <textarea name="comments" id="" cols="30" rows="10"
                      value={props.comments}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
            />
        </div>
    )
};

export default InputComments;