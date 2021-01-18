import React from "react"
import "./YearInput_main.sass"

const YearInput = (props) => {
        return (
            <div className="inputYearForm9">
                <input type="number"
                       min="2017" max="2099" step="1"
                       placeholder='Year'
                       name={props.name}
                />
            </div>
        )
};

export default YearInput;