import React from "react"
import "./Form7_main.sass"
import Logo from "./Logo/Logo"
import FirstNameInput from "./InformationPersonInputs/FirstNameInput"
import LastNameInput from "./InformationPersonInputs/LastNameInput"
import EmailInput from "./InformationPersonInputs/EmailInput"
import PhoneInput from "./InformationPersonInputs/PhoneInput"
import CountryInput from "./LocationInputs/CountryInput/CountryInput"
import CityInput from "./LocationInputs/CityInput/CityInput"
import PostCodeInput from "./LocationInputs/PostCodeInput/PostCodeInput"
import countries from "./LocationInputs/CountryInput/countries"
import AddressInput from "./LocationInputs/AddressInput/AddressInput"
import TextareaInput from "./AdmissionInfoInputs/TextareaInput/TextareaInput"
import RadioInput from "./AdmissionInfoInputs/RadioInput/RadioInput"
import CardNameInput from "./AdmissionInfoInputs/CardNameInput/CardNameInput"
import CardNumberInput from "./AdmissionInfoInputs/CardNumberInput/CardNumberInput"
import CardCodeInput from "./AdmissionInfoInputs/CardCodeInput/CardCodeInput"
import MothSelectList from "./AdmissionInfoInputs/MonthSelectList/MonthSelectList"
import YearInput from "./AdmissionInfoInputs/YearInput/YearInput"
import month from "../Form7/AdmissionInfoInputs/MonthSelectList/month"
import SubmitInput from "./SubmitInput/SubmitInput"

const Form7WithoutValidation = () => {
    return (
                <div className="form7">
                    <div className="containerForm7">
                        <Logo/>
                        <div className="inputContainerForm7 nameInputForm7">
                            <FirstNameInput name="f_name"/>
                            <LastNameInput name="l_name"/>
                        </div>
                        <div className="inputContainerForm7 lineDivForm7">
                            <EmailInput name="email"/>
                            <PhoneInput name="phone"/>
                        </div>
                        <div className="inputContainerForm7 inputLocationForm7">
                            <CountryInput name="country" items={countries}/>
                            <CityInput name="city"/>
                            <PostCodeInput name="postCode"/>
                        </div>
                        <AddressInput name="address"/>
                        <TextareaInput name="admissionInfo"/>
                        <RadioInput name="radioBtn"/>
                        <CardNameInput name="nameOnCard"/>
                        <div className="cardNumberDivForm7">
                            <CardNumberInput name="cardNumber"/>
                            <CardCodeInput name="codeNumber"/>
                        </div>
                        <div className="inputContainerForm7 monthYearContainer">
                            <div className="expirationDateTextForm7">Expiration date:</div>
                            <MothSelectList name="month" items={month}/>
                            <YearInput/>
                        </div>
                        <SubmitInput/>
                    </div>
                </div>
    )
};
export default Form7WithoutValidation;