import React from "react"
import "./Form9_main.sass"
import FirstNameInput from "./FirstnameInput/FirstnameInput"
import LastNameInput from "./LastNameInput/LastNameInput"
import EmailInput from "./EmailInput/EmailInput"
import PhoneInput from "./PhoneInput/PhoneInput"
import CountryInput from "./CountryInput/CountryInput"
import CityInput from "./CityInput/CityInput"
import PostCodeInput from "./PostCodeInput/PostCodeInput"
import AddressInput from "./AddressInput/AddressInput"
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo"
import RadioInput from "./RadioInput/RadioInput"
import NameOnCard from "./NameOnCard/NameOnCard"
import CardNumberInput from "./CardNumberInput/CardNumberInput"
import CVV2Input from "./CVV2Input/CVV2Input"
import MonthInput from "./MonthInput/MonthInput"
import YearInput from "./YearInput/YearInput"
import BtnContinue from "./BtnContinue/BtnContinue"
import countries from "../Form9/CountryInput/countries"
import month from "./MonthInput/month"

const Form9WithoutValidation = () => {
    return (
                <div className="containerForm9">
                    <form className="form9" action='#'>
                        <div className="logoContainerForm9">CHECKOUT</div>
                        <div className="inputsContainerForm9 personInformationInputs">
                            <FirstNameInput name="f_name"/>
                            <LastNameInput name="l_name"/>
                        </div>
                        <div className="inputsContainerForm9 personInformationInputs">
                            <EmailInput name="email"/>
                            <PhoneInput name="phone"/>
                        </div>
                        <CountryInput name="country" items={countries}/>
                        <div className="inputsContainerForm9 inputsForm9">
                            <CityInput name="city"/>
                            <PostCodeInput name="postCode"/>
                        </div>
                        <AddressInput name="address"/>
                        <AdditionalInfo name="admissionInfo"/>
                        <RadioInput name="radioBtn"/>
                        <NameOnCard name="nameOnCard"/>
                        <div className="inputsContainerForm9 inputsForm9">
                            <CardNumberInput name="cardNumber"/>
                            <CVV2Input name="codeNumber"/>
                        </div>
                        <div className="inputsContainerForm9 inputsForm9">
                            <p>Expires End:</p>
                            <MonthInput items={month} name="month"/>
                            <YearInput name="year"/>
                        </div>
                        <BtnContinue/>
                    </form>
                </div>
    )
};
export default Form9WithoutValidation;