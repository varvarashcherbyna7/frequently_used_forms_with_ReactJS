import React from "react"
import "./Form4_main.sass"
import BtnSubmit from "./BtnSubmit/BtnSubmit"
import SubjectInput from "./ContainerInputs/SubjectInput/SubjectInput"
import TextareaInput from "./ContainerInputs/TextareaInput/TextareaInput"
import CheckboxInput from "./ContainerInputs/CheckboxInput/CheckboxInput"
import InputEmail from "./ContainerInputs/InputsEmailName/InputEmail"
import InputName from "./ContainerInputs/InputsEmailName/InputName"

const Form4WithoutValidation = () => {
    return (
                <div className="containerForm4">
                    <form className="form4" action={'#'}>
                        <div className="formLogoForm4"><span>Contacts form</span></div>
                        <div className="containerInputsForm4">
                            <div className="nameEmailContainerForm4">
                                <InputName/>
                                <InputEmail/>
                            </div>
                            <SubjectInput/>
                            <TextareaInput/>
                            <CheckboxInput name="isChecked"/>
                        </div>
                        <div className="lineForm4"/>
                        <BtnSubmit/>
                    </form>
                </div>
    )
};

export default Form4WithoutValidation;