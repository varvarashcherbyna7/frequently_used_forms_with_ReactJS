import React from "react"
import "./InformationPersonInputs_main.sass"

const LastNameInput = (props) => {
    return (
        <div className="informationPersonInputForm7 nameInputForm7">
            <input type="text"
                   placeholder='Last name'
                   name={props.name}
            />
        </div>
    )
};
export default LastNameInput;