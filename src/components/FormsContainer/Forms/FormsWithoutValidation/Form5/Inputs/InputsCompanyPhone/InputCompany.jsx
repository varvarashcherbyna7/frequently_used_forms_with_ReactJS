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
                    />
                </div>
            </div>
    )
};

export default InputCompany;