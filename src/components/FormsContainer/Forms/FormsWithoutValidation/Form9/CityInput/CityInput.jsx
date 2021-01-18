import React from "react"
import "./CityInput_main.sass"

const CityInput = (props) => {
    return (
        <div className="inputCityForm9">
            <input type="text"
                   placeholder='City'
                   name={props.name}
            />
        </div>
    )
};

export default CityInput;