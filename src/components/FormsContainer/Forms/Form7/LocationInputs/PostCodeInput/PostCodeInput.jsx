import React from "react"
import "./PostCodeInput_main.sass"

const PostCodeInput = (props) => {
    return (
        <div className="inputPostCodeForm7">
            <input type="text"
                   placeholder='Post code'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.postCode && props.touched.postCode ? "errorsPostCodeForm7" : null}
            />
            {props.errors.postCode && props.touched.postCode && (
                <div className="inputFeedbackPostCodeForm7">{props.errors.postCode}</div>
            )}
        </div>
    )
};

export default PostCodeInput;