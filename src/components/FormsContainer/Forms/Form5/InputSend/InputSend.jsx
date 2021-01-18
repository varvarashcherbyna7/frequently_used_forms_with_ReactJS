import React from "react"
import "./InputSend_main.sass"

const InputSend = (props) => {
    return (
            <div className="btnDivForm5">
                <input type="submit"
                       value='SEND'
                       disabled={props.isSubmitting}
                />
            </div>

    )
};

export default InputSend;