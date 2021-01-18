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
import {Formik, Form, Field} from "formik"
import * as Yup from "yup"
import InputsFile from "./InputsFileTextarea/InputFile"
import InputTextarea from "./InputsFileTextarea/InputTextarea"

const Form2 = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                company: "",
                email: "",
                phone: "",
                interestedIn: "",
                budget: " ",
                files: "",
                textarea: ""
            }}
            validationSchema={Yup.object().shape({
                name: Yup
                    .string()
                    .min(1, "Must have a character")
                    .max(255, "Must be shorter than 255")
                    .required("Must enter a user name"),
                company: Yup
                    .string()
                    .required("Must enter a company name"),
                email: Yup
                    .string()
                    .required("Must enter an email")
                    .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Invalid email address"),
                phone: Yup
                    .string()
                    .required("Enter your phone number"),
                interestedIn: Yup
                    .string()
                    .required("Write about your interests"),
                budget: Yup
                    .string()
                    .required("What is your budget of project"),
                files: Yup
                    .string(),
                textarea: Yup
                    .string()
            })}

            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    alert(JSON.stringify(values));
                    resetForm();
                    setSubmitting(false)
                }, 300);
                resetForm();
            }}
        >
            {({
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue
              }) => (
                <div className="containerForm2">
                    <Form className="form2" onSubmit={handleSubmit}>
                        <LogoSide/>
                        <div className="containerInputsForm2">
                            <div className="inputsContainerForm2">
                                <InputName
                                    handleChange={handleChange}
                                    name={values.name}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <InputCompany
                                    handleChange={handleChange}
                                    company={values.company}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                            </div>
                            <div className="inputsContainerForm2">
                                <InputEmail
                                    handleChange={handleChange}
                                    email={values.email}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <InputPhone
                                    handleChange={handleChange}
                                    phone={values.phone}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                            </div>

                            <div className="inputsContainerForm2">
                                <InputInterestedIn
                                    handleChange={handleChange}
                                    interestedIn={values.interestedIn}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <InputBudget
                                    handleChange={handleChange}
                                    budget={values.budget}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                            </div>
                        </div>
                        <div className="containerFileTextareaForm2">
                            <Field
                                name="files"
                                onChange={value => setFieldValue("files", value)}
                                value={values.files}
                                handleBlur={handleBlur}
                                isSubmitting={isSubmitting}
                                as={InputsFile}
                            />

                            <InputTextarea
                                handleChange={handleChange}
                                name="textarea"
                                textarea={values.textarea}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                        </div>
                        <ButtonSend isSubmitting={isSubmitting}/>
                    </Form>
                </div>
            )}
        </Formik>

    )
}

export default Form2;