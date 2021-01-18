import React from "react"
import "./SelectInput_main.sass"

const SelectInput = (props) => {
    return (
            <div className="selectListDiv">
                <select name="gender" value='gender'>
                    <option value="Gender">Gender:</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                </select>
            </div>
    )
};

export default SelectInput;