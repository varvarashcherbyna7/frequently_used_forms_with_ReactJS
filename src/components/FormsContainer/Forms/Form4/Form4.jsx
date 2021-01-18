import React from "react"
import "./Form4_main.sass"
import BtnSubmit from "./BtnSubmit/BtnSubmit"
import SubjectInput from "./ContainerInputs/SubjectInput/SubjectInput"
import TextareaInput from "./ContainerInputs/TextareaInput/TextareaInput"
import CheckboxInput from "./ContainerInputs/CheckboxInput/CheckboxInput"
import InputEmail from "./ContainerInputs/InputsEmailName/InputEmail"
import InputName from "./ContainerInputs/InputsEmailName/InputName"
import {Field, Form, Formik} from "formik"
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(1, 'Must have a character')
        .max(255, 'Must be shorter than 255')
        .required('Must enter first name'),
    email: Yup
        .string()
        .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            "Invalid email address")
        .required("Must enter an email"),
    subject: Yup
        .string(),
    message: Yup
        .string()
});

const Form4 = () => {
    return (
        <Formik
            initialValues={{name: '', email: '', subject: '', message: "", contentFormCheckbox: false}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
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
                <div className="containerForm4">
                    <Form className="form4" onSubmit={handleSubmit}>
                        <div className="formLogoForm4"><span>Contacts form</span></div>
                        <div className="containerInputsForm4">
                            <div className="nameEmailContainerForm4">
                                <InputName
                                    handleChange={handleChange}
                                    values={values.name}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />
                                <InputEmail
                                    handleChange={handleChange}
                                    values={values.email}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />
                            </div>
                            <SubjectInput
                                handleChange={handleChange}
                                values={values.subject}
                            />
                            <TextareaInput
                                handleChange={handleChange}
                                values={values.message}
                            />
                            <Field name="isChecked"
                                   handleChange={handleChange}
                                   values={values}
                                   as={CheckboxInput}/>
                        </div>
                        <div className="lineForm4"></div>
                        <BtnSubmit isSubmitting={isSubmitting}/>
                    </Form>
                </div>

            )}
        </Formik>

    )
};

export default Form4;