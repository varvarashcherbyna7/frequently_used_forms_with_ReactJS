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
import {Form, Formik} from "formik"
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup
        .string()
        .matches(/[A-Za-z0-9]+/, "Letters and numbers only, no punctuation or special characters")
        .max(255, "Must be shorter than 255")
        .required("Must enter a user name"),
    email: Yup
        .string()
        .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            "Invalid email address")
        .required("Must enter an email"),
    department: Yup
        .string()
        .required("Must enter a department"),
    message: Yup
        .string(),
    productQuality: Yup
        .string(),
    serviceQuality: Yup
        .string(),
    supportQuality: Yup
        .string()
});

const Form10 = () => {
    return (
        <Formik
            initialValues={{name: '', email: '', department: '', message: '', ratingProductQuality: '',
                ratingServiceQuality: '', ratingSupportQuality: ''}}
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
            {
                ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     setFieldValue,
                     isSubmitting
                }) => (

                    <div className='containerForm10'>
                        <Form className='containerInputsForm10' onSubmit={handleSubmit}>
                            <div className='logoContainerForm10'>FEEDBACK</div>
                            <InputName
                                name='name'
                                value={values.name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <InputEmail
                                name='email'
                                value={values.email}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <div className='selectSelectInputDepartment'>
                                <SelectInputDepartment items={department}
                                                       name='department'
                                                       value={values.department}
                                                       onChange={value => setFieldValue("department", value)}
                                                       handleChange={handleChange}
                                                       handleBlur={handleBlur}
                                                       touched={touched}
                                                       errors={errors}
                                />
                            </div>
                            <TextareaInputFeedbackMessage
                                name='message'
                                value={values.message}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <div className='CheckboxInputContainer'>
                                <CheckboxInputProductQuality
                                    name='productQuality'
                                    value={values.ratingProductQuality}
                                    onChange={value => setFieldValue("ratingProductQuality", value)}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <CheckboxInputServiceQuality
                                    name='serviceQuality'
                                    value={values.ratingServiceQuality}
                                    onChange={value => setFieldValue("ratingServiceQuality", value)}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <CheckboxInputSupportQuality
                                    name='supportQuality'
                                    value={values.ratingSupportQuality}
                                    onChange={value => setFieldValue("ratingSupportQuality", value)}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                            </div>
                            <ButtonSend isSubmitting={isSubmitting}/>
                        </Form>
                    </div>
                )
            }
        </Formik>
    )
};

export default Form10;