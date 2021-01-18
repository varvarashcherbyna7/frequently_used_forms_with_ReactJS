import React from "react"
import "./Form1_main.sass"
import InputEmail from "./Inputs/InputEmail"
import InputPassword from "./Inputs/InputPassword"
import LinkForgetPassword from "./LinkForgetPassword/LinkForgetPassword"
import LoggedCheckbox from "./LoggedCheckbox/LoggedCheckbox"
import LogoSide from "./LogoSide/LogoSide"
import Button from "./Button/Button"

const Form1WithoutValidation = () => {
                return (
                        <div className="containerForm1">
                            <div className="form1">
                                <LogoSide/>
                                <InputEmail/>
                                <InputPassword/>
                                <LinkForgetPassword/>
                                <LoggedCheckbox/>
                                <Button/>
                            </div>
                        </div>
                )
}
export default Form1WithoutValidation;