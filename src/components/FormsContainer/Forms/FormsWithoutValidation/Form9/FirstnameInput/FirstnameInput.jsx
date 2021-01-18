import React from "react"
import "./FirstnameInput_main.sass"

const FirstNameInput = (props) => {
    return (
        <div className="inputFirstNameForm9">
            <input type="text"
                   placeholder='First name'
                   name={props.name}
            />
        </div>
    )
};

export default FirstNameInput;