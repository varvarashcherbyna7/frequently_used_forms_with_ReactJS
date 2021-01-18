import React from "react"
import "./Form5_main.sass"
import TextareaInputs from "./Inputs/TextareaInputs/TextareaInputs"
import InputName from "./Inputs/InputsNameEmail/InputName"
import InputEmail from "./Inputs/InputsNameEmail/InputEmail"
import starImg from './img/star.png'
import InputCompany from "./Inputs/InputsCompanyPhone/InputCompany"
import InputPhone from "./Inputs/InputsCompanyPhone/InputPhone"
import InputSend from "./InputSend/InputSend"
import {Form, Formik} from "formik"
import * as Yup from 'yup'
import Randomer from "./InputsRandomer/Randomer"
import InputKey from "./InputsRandomer/Randomer/InputKey"

const validationSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a user name"),
    email: Yup
        .string()
        .required("Must enter an email")
        .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Invalid email address"),
    company: Yup
        .string(),
    phone: Yup
        .string()
        .required("Enter your phone number"),
    message: Yup
        .string()
        .required("Enter your message"),
    random: Yup
        .string(),
    enterKey: Yup
        .string()
        .required("Must enter the value")
        .test('value-match', 'The values must match', function (value) {
            return this.parent.random === value
        }),
});

let initialRandomValue = "";
let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
let max_position = words.length - 1;
let position;
for (let i = 0; i < 5; ++i) {
    position = Math.floor(Math.random() * max_position);
    initialRandomValue = initialRandomValue + words.substring(position, position + 1);
}

const Form5 = () => {

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                company: "",
                phone: "",
                message:"",
                random: initialRandomValue,
                enterKey: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false)
                }, 500);
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
                <div className="containerForm5">
                    <div className="logoContainerForm5">
                        <div>Easy Contact Form</div>
                    </div>
                    <Form action="#" className="formContainerForm5" onSubmit={handleSubmit}>
                        <div className="inputsContainerForm5">
                            <InputName
                                starImg={starImg}
                                handleChange={handleChange}
                                name={values.name}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <InputEmail
                                starImg={starImg}
                                handleChange={handleChange}
                                email={values.email}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                        </div>
                        <div className="inputsContainerForm5">
                            <InputCompany
                                handleChange={handleChange}
                                company={values.company}
                                handleBlur={handleBlur}
                            />
                            <InputPhone
                                starImg={starImg}
                                handleChange={handleChange}
                                phone={values.phone}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                        </div>
                        <TextareaInputs starImg={starImg}
                                        handleChange={handleChange}
                                        message={values.message}
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}
                        />
                        <div className="btnContainerForm5">
                            <Randomer
                                name="random"
                                value={values.random}
                                onChange={value => setFieldValue("random", value)}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                isSubmitting={isSubmitting}
                            />
                            <InputKey
                                name="enterKey"
                                value={values.enterKey}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <InputSend isSubmitting={isSubmitting}/>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>

    )
};

export default Form5;