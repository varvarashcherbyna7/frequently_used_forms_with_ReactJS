import React from "react"
import "./FormRegistration_main.sass"
import NameInputs from "./Inputs/NameInputs/NameInputs"
import SelectInput from "./Inputs/SelectInput/SelectInput"
import SubmitInput from "./Inputs/SubmitInput/SubmitInput"
import UserNameInput from "./Inputs/RegistrationInputs/UserNameInput"
import EmailInput from "./Inputs/RegistrationInputs/EmailInput"
import PasswordInputs from "./Inputs/RegistrationInputs/PasswordInputs"
import CheckboxTermsService from "./Inputs/CheckboxInputs/CheckboxTermsService"
import CheckboxReceiveNews from "./Inputs/CheckboxInputs/CheckboxReceiveNews"

const FormRegistration = () => {
    return (
                <div className="form3Registration">
                    <UserNameInput/>
                    <EmailInput/>
                    <PasswordInputs/>
                    <div className="form3RegistrationLine"/>
                    <NameInputs/>
                    <SelectInput/>
                    <div className="form3RegistrationCheckbox">
                        <CheckboxTermsService
                            name="choose"
                            value="I agree to the Terms of Service"
                            type="checkbox"
                        />
                        <CheckboxReceiveNews
                            name="choose"
                            value='I want to receive news and special offers'
                            type="checkbox"
                        />
                    </div>
                    <SubmitInput />
                </div>
    )
};

export default FormRegistration;