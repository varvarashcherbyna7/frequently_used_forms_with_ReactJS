import React from "react"
import "./FormComment_main.sass"
import Logo from "./Logo/Logo"
import SubmitButton from "./SubmitButton/SubmitButton"
import NameInput from "./Inputs/NameInput"
import EmailInput from "./Inputs/EmailInput"
import WebsiteInput from "./Inputs/WebsiteInput"
import TextareaInput from "./Inputs/TextareaInput"
import {Formik} from "formik"
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
    website: Yup
        .string()
        .required("Enter an URL: https://example.com"),
    comment: Yup
        .string()
});

const FormComment = () => {
    return (
        <Formik
            initialValues={{name: '', email: '', website: '', comment: ''}}
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
                <form action='#' className="form6" onSubmit={handleSubmit}>
                    <Logo/>
                    <div className="inputsContainerForm6">
                        <div className="inputsForm6">
                            <NameInput
                                name="name"
                                handleChange={handleChange}
                                value={values.name}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <EmailInput
                                name="email"
                                handleChange={handleChange}
                                value={values.email}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                        </div>
                        <WebsiteInput
                            name="website"
                            handleChange={handleChange}
                            value={values.website}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                        />
                        <TextareaInput
                            name="comment"
                            handleChange={handleChange}
                            value={values.comment}
                            handleBlur={handleBlur}
                        />
                    </div>
                    <SubmitButton isSubmitting={isSubmitting}/>
                </form>
            )}

        </Formik>
    )
};

export default FormComment;