import React from "react"
import "./AddressInput_main.sass"

const AddressInput = (props) => {
    return (
        <div className="addressInputDivForm9">
            <input type="text"
                   placeholder='Address'
                   name={props.name}
            />
        </div>
    )
};

export default AddressInput;