import React from "react"
import "./BtnContinue_main.sass"

const BtnContinue = (props) => {
    return (
        <div className="btnContainerForm9">
            <div className="btnDivForm9">
                <input type="submit"
                       value='Continue'
                       disabled={props.isSubmitting}
                /></div>
        </div>
    )
};

export default BtnContinue;