import React from "react"
import "./AddressInput_main.sass"

const AddressInput = (props) => {
    return (
        <div className="addressInputDivForm9">
            <input type="text"
                   placeholder='Address'
                   name={props.name}
                   onChange={props.handleChange}
                   value={props.value}
                   onBlur={props.handleBlur}
                   className={props.errors.address && props.touched.address ? "errorsAddressForm9" : null}
            />
            {props.errors.address && props.touched.address && (
                <div className="inputFeedbackAddressForm9">{props.errors.address}</div>
            )}
        </div>
    )
};

export default AddressInput;