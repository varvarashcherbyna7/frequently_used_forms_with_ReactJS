import React from "react"
import "./AdditionalInfo_main.sass"

const AdditionalInfo = (props) => {
    return (
        <div className= "inputDivTextareaForm9" >
            <textarea
                cols="30" rows="8"
                placeholder='Admission info'
                name={props.name}
            />
        </div>
    )
};

export default AdditionalInfo;