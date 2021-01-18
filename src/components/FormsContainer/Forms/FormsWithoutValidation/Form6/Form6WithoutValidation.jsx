import React from "react"
import "./Form6_main.sass"
import Logo from "./Logo/Logo"
import SubmitButton from "./SubmitButton/SubmitButton"
import NameInput from "./Inputs/NameInput"
import EmailInput from "./Inputs/EmailInput"
import WebsiteInput from "./Inputs/WebsiteInput"
import TextareaInput from "./Inputs/TextareaInput"

const Form6WithoutValidation = () => {
    return (
                <form action='#' className="form6">
                    <Logo/>
                    <div className="inputsContainerForm6">
                        <div className="inputsForm6">
                            <NameInput/>
                            <EmailInput/>
                        </div>
                        <WebsiteInput/>
                        <TextareaInput/>
                    </div>
                    <SubmitButton/>
                </form>
    )
};

export default Form6WithoutValidation;