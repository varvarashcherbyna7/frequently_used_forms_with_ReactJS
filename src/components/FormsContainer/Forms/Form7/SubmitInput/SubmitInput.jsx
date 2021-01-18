import React from "react"
import "./SubmitInput_main.sass"

const SubmitInput = (props) => {
    return (
        <div className="btnContainerForm7">
            <div className="btnDivForm7">
                <input type="submit"
                       value='Continue'
                       disabled={props.isSubmitting}
                /></div>
        </div>
    )
};

export default SubmitInput;