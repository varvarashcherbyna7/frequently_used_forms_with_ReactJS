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
import {Form, Formik} from "formik"
import * as Yup from "yup"

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

const Form7 = () => {
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
                  isSubmitting,
                  setFieldValue
              }) => (
                <Form className="form7" onSubmit={handleSubmit}>
                    <div className="containerForm7">
                        <Logo/>
                        <div className="inputContainerForm7 nameInputForm7">
                            <FirstNameInput name="f_name"
                                            handleChange={handleChange}
                                            value={values.f_name}
                                            handleBlur={handleBlur}
                                            touched={touched}
                                            errors={errors}
                            />
                            <LastNameInput name="l_name"
                                           handleChange={handleChange}
                                           value={values.l_name}
                                           handleBlur={handleBlur}
                                           touched={touched}
                                           errors={errors}
                            />
                        </div>
                        <div className="inputContainerForm7 lineDivForm7">
                            <EmailInput name="email"
                                        handleChange={handleChange}
                                        value={values.email}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}
                            />
                            <PhoneInput name="phone"
                                        handleChange={handleChange}
                                        value={values.phone}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}
                            />
                        </div>
                        <div className="inputContainerForm7 inputLocationForm7">
                            <CountryInput name="country"
                                          items={countries}
                                          onChange={value => setFieldValue("country", value)}
                                          value={values.country}
                                          handleBlur={handleBlur}
                                          touched={touched}
                                          errors={errors}
                                          isSubmitting={isSubmitting}
                            />
                            <CityInput name="city"
                                       handleChange={handleChange}
                                       value={values.city}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}
                            />
                            <PostCodeInput name="postCode"
                                           handleChange={handleChange}
                                           value={values.postCode}
                                           handleBlur={handleBlur}
                                           touched={touched}
                                           errors={errors}
                            />
                        </div>
                        <AddressInput name="address"
                                      handleChange={handleChange}
                                      value={values.address}
                                      handleBlur={handleBlur}
                                      touched={touched}
                                      errors={errors}
                        />
                        <TextareaInput name="admissionInfo"
                                       handleChange={handleChange}
                                       value={values.admissionInfo}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}
                        />
                        <RadioInput name="radioBtn"
                                    onChange={value => setFieldValue("radioBtn", value)}
                                    value={values.radioBtn}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                    isSubmitting={isSubmitting}
                        />
                        <CardNameInput name="nameOnCard"
                                       handleChange={handleChange}
                                       value={values.nameOnCard}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}
                        />
                        <div className="cardNumberDivForm7">
                            <CardNumberInput name="cardNumber"
                                             handleChange={handleChange}
                                             value={values.cardNumber}
                                             handleBlur={handleBlur}
                                             touched={touched}
                                             errors={errors}
                            />
                            <CardCodeInput name="codeNumber"
                                           handleChange={handleChange}
                                           value={values.codeNumber}
                                           handleBlur={handleBlur}
                                           touched={touched}
                                           errors={errors}
                            />
                        </div>
                        <div className="inputContainerForm7 monthYearContainer">
                            <div className="expirationDateTextForm7">Expiration date:</div>
                            <MothSelectList name="month"
                                            items={month}
                                            onChange={value => setFieldValue("month", value)}
                                            value={values.month}
                                            handleBlur={handleBlur}
                                            touched={touched}
                                            errors={errors}
                                            isSubmitting={isSubmitting}
                            />
                            <YearInput name="year"
                                       handleChange={handleChange}
                                       value={values.year}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}
                            />
                        </div>
                        <SubmitInput isSubmitting={isSubmitting}/>
                    </div>
                </Form>
            )}
        </Formik>
    )
};
export default Form7;