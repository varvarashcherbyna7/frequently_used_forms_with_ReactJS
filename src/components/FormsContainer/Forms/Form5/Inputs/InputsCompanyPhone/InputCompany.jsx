import React from "react"
import "./InputsCompanyPhone_main.sass"

const InputCompany = (props) => {
    return (
            <div className="companyPhoneInputContainer">
                <div className="companyPhoneInputText">Company</div>
                <div className="companyPhoneInputDiv">
                    <input type="text"
                           placeholder='Enter your company'
                           name="company"
                           onChange={props.handleChange}
                           value={props.company}
                           onBlur={props.handleBlur}
                    />
                </div>
            </div>
    )
};

export default InputCompany;