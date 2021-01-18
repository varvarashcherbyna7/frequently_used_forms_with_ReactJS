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
import {Form, Formik} from "formik"
import * as Yup from "yup"
import countries from "../Form9/CountryInput/countries"
import month from "./MonthInput/month"

const validationSchema = Yup.object().shape({
    f_name: Yup
        .string()
        .min(1, 'Must have a character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter first name'),
    l_name: Yup
        .string()
        .min(1, 'Must have a character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter last name'),
    email: Yup
        .string()
        .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            "Invalid email address")
        .required("Must enter an email"),
    phone: Yup
        .string()
        .required("Enter your phone number"),
    country: Yup
        .string()
        .required("Enter the name of the country"),
    city: Yup
        .string()
        .required("Enter the name of the city"),
    postCode: Yup
        .string()
        .required("Enter code"),
    address: Yup
        .string()
        .required("Enter your address"),
    admissionInfo: Yup
        .string(),
        // .required("Enter admission info"),
    radioBtn: Yup
        .string()
        .required("Choose a payment system"),
    nameOnCard: Yup
        .string()
        .required("Enter the name of the payment card holder")
        .min(1, 'Must have a character')
        .max(255, 'Must be shorter than 255'),
    cardNumber: Yup
        .string()
        .required("Enter your payment card number"),
    codeNumber: Yup
        .string()
        .required("Enter the card verification value"),
    month: Yup
        .string()
        .required("Enter the end month of the payment card"),
    year: Yup
        .string()
        .required("Enter the end year of the payment card")
});

const Form9 = () => {

    return (
        <Formik
            initialValues={{
                f_name: "", l_name: "", email: "", phone: "", country: "", city: "", postCode: "", address: "",
                admissionInfo: "", radioBtn: "", nameOnCard: "", cardNumber: "", codeNumber: "", month: "", year: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    alert(JSON.stringify(values));
                    resetForm();
                    setSubmitting(false)
                }, 500);
                resetForm();
            }}
        >

            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting
              }) => (
                <div className="containerForm9">
                    <Form className="form9" onSubmit={handleSubmit}>
                        <div className="logoContainerForm9">CHECKOUT</div>
                        <div className="inputsContainerForm9 personInformationInputs">
                            <FirstNameInput name="f_name"
                                            handleChange={handleChange}
                                            value={values.f_name}
                                            handleBlur={handleBlur}
                                            touched={touched}
                                            errors={errors}/>
                            <LastNameInput name="l_name"
                                           handleChange={handleChange}
                                           value={values.l_name}
                                           handleBlur={handleBlur}
                                           touched={touched}
                                           errors={errors}/>
                        </div>
                        <div className="inputsContainerForm9 personInformationInputs">
                            <EmailInput name="email"
                                        handleChange={handleChange}
                                        value={values.email}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}/>
                            <PhoneInput name="phone"
                                        handleChange={handleChange}
                                        value={values.phone}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}/>
                        </div>
                        <CountryInput name="country"
                                      items={countries}
                                      value={values.country}
                                      handleChange={handleChange}
                                      handleBlur={handleBlur}
                                      touched={touched}
                                      errors={errors}
                        />
                        <div className="inputsContainerForm9 inputsForm9">
                            <CityInput name="city"
                                       handleChange={handleChange}
                                       value={values.city}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}/>
                            <PostCodeInput name="postCode"
                                           handleChange={handleChange}
                                           value={values.postCode}
                                           handleBlur={handleBlur}
                                           touched={touched}
                                           errors={errors}/>
                        </div>
                        <AddressInput name="address"
                                      handleChange={handleChange}
                                      value={values.address}
                                      handleBlur={handleBlur}
                                      touched={touched}
                                      errors={errors}/>
                        <AdditionalInfo name="admissionInfo"
                                        handleChange={handleChange}
                                        value={values.admissionInfo}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}/>
                        <RadioInput name="radioBtn"
                                    // onChange={value => setFieldValue("radioBtn", value)}
                                    value={values.radioBtn}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                        />
                        <NameOnCard name="nameOnCard"
                                    handleChange={handleChange}
                                    value={values.nameOnCard}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}/>
                        <div className="inputsContainerForm9 inputsForm9">
                            <CardNumberInput name="cardNumber"
                                             handleChange={handleChange}
                                             value={values.cardNumber}
                                             handleBlur={handleBlur}
                                             touched={touched}
                                             errors={errors}/>
                            <CVV2Input name="codeNumber"
                                       handleChange={handleChange}
                                       value={values.codeNumber}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}/>
                        </div>
                        <div className="inputsContainerForm9 inputsForm9">
                            <p>Expires End:</p>
                            <MonthInput items={month}
                                        name="month"
                                        handleChange={handleChange}
                                        value={values.month}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}
                                        />
                            <YearInput name="year"
                                       handleChange={handleChange}
                                       value={values.year}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}/>
                        </div>
                        <BtnContinue isSubmitting={isSubmitting}/>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default Form9;