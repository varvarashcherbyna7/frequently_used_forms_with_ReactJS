import React from "react"
import "./SubmitInput_main.sass"

const SubmitInput = (props) => {

    return <div className="btnDivFormRegistration">
        <input type="submit" value="Submit" disabled={props.isSubmitting}/>
    </div>
};

export default SubmitInput;