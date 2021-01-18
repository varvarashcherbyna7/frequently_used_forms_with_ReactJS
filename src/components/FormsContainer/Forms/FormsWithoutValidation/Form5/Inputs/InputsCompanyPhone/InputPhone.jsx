import React from "react"
import "./InputsCompanyPhone_main.sass"

const InputPhone = (props) => {
    return (
            <div className="companyPhoneInputContainer"r>
                <div className="companyPhoneInputText">Phone<span className="companyPhoneImgDiv">
                    <img src={props.starImg} alt="starImage"/></span>
                </div>
                <div className="companyPhoneInputDiv">
                    <input type="tel"
                           mask={props.mask}
                           placeholder='Enter your phone number'
                           name="phone"
                    />
                </div>
            </div>
    )
};

export default InputPhone;