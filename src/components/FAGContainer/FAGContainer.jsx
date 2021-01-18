import React from "react"
import "./FAGContainer_main.sass"
import line_red from "../../img/line_red.png";

const FAGContainer = () => {
    return(
        <div className='devicesContainer'>
            <h2>FAQ <a name="fag"/></h2>
            <div><img src={line_red} alt="line"/></div>
        </div>
    )
};
 export default FAGContainer;