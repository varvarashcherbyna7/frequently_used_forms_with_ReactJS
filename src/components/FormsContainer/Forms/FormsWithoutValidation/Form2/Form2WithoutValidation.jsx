import React from "react"
import "./Form2_main.sass"
import LogoSide from "./LogoSide/LogoSide"
import ButtonSend from "./ButtonSend/ButtonSend"
import InputName from "./InputsInformation/InputName"
import InputCompany from "./InputsInformation/InputCompany"
import InputEmail from "./InputsInformation/InputEmail"
import InputPhone from "./InputsInformation/InputPhone"
import InputInterestedIn from "./InputsInformation/InputInterestedIn"
import InputBudget from "./InputsInformation/InputBudget"
import InputsFile from "./InputsFileTextarea/InputFile"
import InputTextarea from "./InputsFileTextarea/InputTextarea"

const Form2WithoutValidation = () => {
    return (
                <div className="containerForm2">
                    <div className="form2">
                        <LogoSide/>
                        <div className="containerInputsForm2">
                            <div className="inputsContainerForm2">
                                <InputName/>
                                <InputCompany/>
                            </div>
                            <div className="inputsContainerForm2">
                                <InputEmail/>
                                <InputPhone/>
                            </div>
                            <div className="inputsContainerForm2">
                                <InputInterestedIn/>
                                <InputBudget/>
                            </div>
                        </div>
                        <div className="containerFileTextareaForm2">
                            <InputsFile/>
                            <InputTextarea/>
                        </div>
                        <ButtonSend/>
                    </div>
                </div>
    )
};
export default Form2WithoutValidation;