import React from "react"
import "./ButtonSend_main.sass"

const ButtonSend = (props) => {
    return (
        <div className="btnContainerForm10">
            <div>
                <input type="submit"
                       value='Send'
                    // disabled={props.isSubmitting}
                />
            </div>
        </div>
    )
};

export default ButtonSend;