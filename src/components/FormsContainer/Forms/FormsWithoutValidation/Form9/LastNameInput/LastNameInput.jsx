import React from "react"
import "./LastNameInput_main.sass"

const LastNameInput = (props) => {
    return (
        <div className="lastNameInputForm9">
            <input type="text"
                   placeholder='Last name'
                   name={props.name}
            />
        </div>
    )
};
export default LastNameInput;