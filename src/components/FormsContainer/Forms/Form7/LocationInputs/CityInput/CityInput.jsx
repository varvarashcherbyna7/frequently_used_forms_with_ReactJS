import React from "react"
import "./CityInput_main.sass"

const CityInput = (props) => {
    return (
        <div className="inputCityForm7">
            <input type="text"
                   placeholder='City'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.city && props.touched.city ? "errorsCityForm7" : null}
            />
            {props.errors.city && props.touched.city && (
                <div className="inputFeedbackCityForm7">{props.errors.city}</div>
            )}
        </div>
    )
};

export default CityInput;