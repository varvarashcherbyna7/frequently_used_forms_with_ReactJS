import React from "react"
import "./Form5_main.sass"
import TextareaInputs from "./Inputs/TextareaInputs/TextareaInputs"
import InputName from "./Inputs/InputsNameEmail/InputName"
import InputEmail from "./Inputs/InputsNameEmail/InputEmail"
import starImg from './img/star.png'
import InputCompany from "./Inputs/InputsCompanyPhone/InputCompany"
import InputPhone from "./Inputs/InputsCompanyPhone/InputPhone"
import InputSend from "./InputSend/InputSend"
import Randomer from "./InputsRandomer/Randomer"
import InputKey from "./InputsRandomer/Randomer/InputKey"

const Form5WithoutValidation = () => {
    return (
                <div className="containerForm5">
                    <div className="logoContainerForm5">
                        <div>Easy Contact Form</div>
                    </div>
                    <div className="formContainerForm5" >
                        <div className="inputsContainerForm5">
                            <InputName starImg={starImg}/>
                            <InputEmail starImg={starImg}/>
                        </div>
                        <div className="inputsContainerForm5">
                            <InputCompany/>
                            <InputPhone starImg={starImg}/>
                        </div>
                        <TextareaInputs starImg={starImg}/>
                        <div className="btnContainerForm5">
                            <Randomer/>
                            <InputKey/>
                            <InputSend/>
                        </div>
                    </div>
                </div>
    )
};

export default Form5WithoutValidation;