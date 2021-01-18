import React from "react"
import "./CityInput_main.sass"

const CityInput = (props) => {
    return (
        <div className="inputCityForm9">
            <input type="text"
                   placeholder='City'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.city && props.touched.city ? "errorsCityForm9" : null}
            />
            {props.errors.city && props.touched.city && (
                <div className="inputFeedbackCityForm9">{props.errors.city}</div>
            )}
        </div>
    )
};

export default CityInput;