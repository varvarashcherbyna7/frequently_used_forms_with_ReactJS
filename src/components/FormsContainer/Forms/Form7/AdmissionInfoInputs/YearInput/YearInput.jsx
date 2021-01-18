import React from "react"
import "./YearInput_main.sass"

const YearInput = (props) => {

        return (
            <div className="inputYearForm7">
                <input type="number"
                       min="2017" max="2099" step="1"
                       placeholder='Year'
                       name={props.name}
                       onChange={props.handleChange}
                       value={props.value}
                       onBlur={props.handleBlur}
                       className={props.errors.year && props.touched.year ? 'errorsYearForm7' : null}
                />
                {props.errors.year && props.touched.year && (
                    <div className="inputFeedbackYearForm7">{props.errors.year}</div>
                )}
            </div>
        )
};

export default YearInput;