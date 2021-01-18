import React from "react"
import "./ButtonSend_main.sass"

const ButtonSend = (props) => {
        return (
            <div className="blockIBtn">
                <button type='submit' className="btn" disabled={props.isSubmitting}>Send request</button>
            </div>
        )
};

export default ButtonSend;