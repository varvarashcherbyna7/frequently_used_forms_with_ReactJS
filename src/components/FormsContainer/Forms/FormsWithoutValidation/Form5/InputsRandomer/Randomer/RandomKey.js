import React from "react"
import "../InputsRandomer_main.sass"

const RandomKey = (props) => {
    return (
        <div className="randomDiv">
            <p><span>{props.value}</span></p>
        </div>
    )
};

export default RandomKey;