import React from "react"
import "./InputName_main.sass"

const InputName = (props) => {
    return (
        <div className="inputFirstNameForm10">
            <input type="text"
                   placeholder='Name'
                   // name={props.name}
                   // onChange={props.handleChange}
                   // value={props.value}
                   // onBlur={props.handleBlur}
                   // className={props.errors.name && props.touched.name ? "errorsForm10" : null}
            />
            {/*{props.errors.name && props.touched.name && (*/}
            {/*    <div className="inputFeedbackForm10">{props.errors.name}</div>*/}
            {/*)}*/}
        </div>
    )
};

export default InputName;