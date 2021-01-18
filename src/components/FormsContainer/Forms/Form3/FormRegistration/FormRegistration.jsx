import React from "react"
import "./FormRegistration_main.sass"
import NameInputs from "./Inputs/NameInputs/NameInputs"
import SelectInput from "./Inputs/SelectInput/SelectInput"
import SubmitInput from "./Inputs/SubmitInput/SubmitInput"
import UserNameInput from "./Inputs/RegistrationInputs/UserNameInput"
import EmailInput from "./Inputs/RegistrationInputs/EmailInput"
import PasswordInputs from "./Inputs/RegistrationInputs/PasswordInputs"
import CheckboxTermsService from "./Inputs/CheckboxInputs/CheckboxTermsService"
import CheckboxReceiveNews from "./Inputs/CheckboxInputs/CheckboxReceiveNews"
import {Field, Form, Formik} from "formik"
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .matches(/[A-Za-z0-9]+/, "Letters and numbers only, no punctuation or special characters")
        .max(255, "Must be shorter than 255")
        .required("Must enter a user name"),
    email: Yup
        .string()
        .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            "Invalid email address")
        .required("Must enter an email"),
    password: Yup
        .string()
        .required("Must enter a password")
        .min(8, "Password should be 8 characters minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    c_password: Yup
        .string()
        .required("Must enter a confirm password")
        .test('passwords-match', 'Passwords must match ya fool', function (value) {
            return this.parent.password === value
        }),
    firstName: Yup
        .string()
        .min(1, 'Must have a character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter first name'),
    lastName: Yup
        .string()
        .min(1, 'Must have a character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter last name'),
    choose: Yup
        .string()
});

const FormRegistration = () => {
    return (
        <Formik
            initialValues={{username: '', email: '', password: '', c_password: '', firstName: '',
                lastName: '', gender:"", choose: []}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    alert(JSON.stringify(values));
                    resetForm();
                    setSubmitting(false)
                }, 500)
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form className="form3Registration" onSubmit={handleSubmit}>
                    <UserNameInput
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />
                    <EmailInput
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />
                    <PasswordInputs
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />
                    <div className="form3RegistrationLine"/>
                    <NameInputs
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />
                    <SelectInput
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />
                    <div className="form3RegistrationCheckbox">
                        <Field name="choose"
                               handleChange={handleChange}
                               value="I agree to the Terms of Service"
                               type="checkbox"
                               handleBlur={handleBlur}
                               as={CheckboxTermsService}/>
                        <Field name="choose"
                               handleChange={handleChange}
                               value='I want to receive news and special offers'
                               type="checkbox"
                               handleBlur={handleBlur}
                               as={CheckboxReceiveNews}/>
                    </div>
                    <SubmitInput isSubmitting={isSubmitting}/>
                </Form>

            )}
        </Formik>
    )
};

export default FormRegistration;