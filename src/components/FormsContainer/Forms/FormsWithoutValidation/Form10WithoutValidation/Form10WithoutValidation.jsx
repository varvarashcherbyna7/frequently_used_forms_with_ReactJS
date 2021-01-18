import React from "react"
import './Form10_main.sass'
import InputName from "./InputName/InputName"
import InputEmail from "./InputEmail/InputEmail"
import SelectInputDepartment from "./SelectInputDepartment/SelectInputDepartment"
import department from './SelectInputDepartment/department'
import TextareaInputFeedbackMessage from "./TextareaInputFeedbackMessage/TextareaInputFeedbackMessage"
import CheckboxInputProductQuality from "./CheckboxesInputsQuality/CheckboxInputProductQuality"
import CheckboxInputServiceQuality from "./CheckboxesInputsQuality/CheckboxInputServiceQuality"
import CheckboxInputSupportQuality from "./CheckboxesInputsQuality/CheckboxInputSupportQuality"
import ButtonSend from "./ButtonSend/ButtonSend"

const Form10WithoutValidation = () => {
    return (
        <div className='containerForm10'>
            <div className='containerInputsForm10'>
                <div className='logoContainerForm10'>FEEDBACK</div>
                <InputName/>
                <InputEmail/>
                <div className='selectSelectInputDepartment'><SelectInputDepartment items={department}/></div>
                <TextareaInputFeedbackMessage/>
                <div className='CheckboxInputContainer'>
                    <CheckboxInputProductQuality/>
                    <CheckboxInputServiceQuality/>
                    <CheckboxInputSupportQuality/>
                </div>
                <ButtonSend/>
            </div>
        </div>
    )
};

export default Form10WithoutValidation;