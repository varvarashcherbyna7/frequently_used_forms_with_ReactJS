import React from "react"
import "./AddressInput_main.sass"

const AddressInput = (props) => {
    return (
        <div className="addressInputDivForm7">
            <input type="text"
                   placeholder='Address'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.address && props.touched.address ? "errorsAddressForm7" : null}
            />
            {props.errors.address && props.touched.address && (
                <div className="inputFeedbackAddressForm7">{props.errors.address}</div>
            )}
        </div>
    )
};

export default AddressInput;