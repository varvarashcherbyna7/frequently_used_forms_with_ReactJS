import React from "react"
import "./InformationPersonInputs_main.sass"

const FirstNameInput = (props) => {
    return (
        <div className="informationPersonInputForm7 nameInputForm7">
            <input type="text"
                   placeholder='First name'
                   name={props.name}
            />
        </div>
    )
};
export default FirstNameInput;