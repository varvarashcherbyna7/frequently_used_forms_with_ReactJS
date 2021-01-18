import React from "react"
import "./Form8_main.sass"
import InputName from "./InputName/InputName"
import LogoSide from "./LogoSide/LogoSide"
import InputEmail from "./InputEmail/InputEmail"
import InputPhone from "./InputPhone/InputPhone"
import InputAdultGuests from "./InputAdultGuests/InputAdultGuests"
import InputChildrenGuests from "./InputChildrenGuests/InputChildrenGuests"
import InputCheckinDate from "./InputCheckinDate/InputCheckinDate"
import InputCheckoutDate from "./InputCheckoutDate/InputCheckoutDate"
import InputComments from "./InputComments/InputComments"
import BtnBooking from "./BtnBooking/BtnBooking"
import {Formik, Form} from "formik"
import * as Yup from 'yup'

const Form8 = () => (
    <Formik
        initialValues={{
            name: "", email: "", phone: "", adultQuests: "",
            childrenQuests: "", checkInDate: "", checkOutDate: "", comments: ""
        }}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(true);
            setTimeout((data) => {
                setSubmitting(true);
                console.log(data);
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false)
            }, 500)
        }}
        validationSchema={Yup.object().shape({
            name: Yup
                .string()
                .required("Must enter a name"),
            email: Yup
                .string()
                .required("Must enter an email")
                .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Invalid email address"),
            phone: Yup
                .string()
                .required("Must enter a phone"),
            adultQuests: Yup
                .string(),
            childrenQuests: Yup
                .string(),
            checkInDate: Yup
                .string()
                .required("Enter check-in date"),
            checkOutDate: Yup
                .string()
                .required("Enter check-out date"),
            comments: Yup
                .string()
        })}
    >

        {
            props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;

                return (
                    <div className="form8">
                        <Form className="containerInputsForm8"
                              name="form_1"
                              action={'#'}
                              onSubmit={handleSubmit}
                        >
                            <LogoSide/>
                            <InputName
                                name={values.name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                            />
                            <div className="inputsContainerForm8">
                                <InputEmail email={values.email}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            errors={errors}
                                            touched={touched}
                                />
                                <InputPhone phone={values.phone}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            errors={errors}
                                            touched={touched}
                                />
                            </div>
                            <div className="inputsContainerForm8">
                                <InputAdultGuests adultQuests={values.adultQuests}
                                                  handleChange={handleChange}
                                                  handleBlur={handleBlur}
                                                  errors={errors}
                                                  touched={touched}
                                />
                                <InputChildrenGuests childrenQuests={values.childrenQuests}
                                                     handleChange={handleChange}
                                                     handleBlur={handleBlur}
                                                     errors={errors}
                                                     touched={touched}/>
                            </div>
                            <div className="inputsContainerForm8">
                                <InputCheckinDate checkInDate={values.checkInDate}
                                                  dateFormat="MM-DD-YYYY"
                                                  minDate={Date.now.toString()}
                                                  maxDate="2050-06-01"
                                                  handleChange={handleChange}
                                                  handleBlur={handleBlur}
                                                  errors={errors}
                                                  touched={touched}/>
                                <InputCheckoutDate checkOutDate={values.checkOutDate}
                                                   dateFormat="MM-DD-YYYY"
                                                   minDate={Date.now.toString()}
                                                   maxDate="2050-06-01"
                                                   handleChange={handleChange}
                                                   handleBlur={handleBlur}
                                                   errors={errors}
                                                   touched={touched}/>
                            </div>
                            <InputComments comments={values.comments}
                                           handleChange={handleChange}
                                           handleBlur={handleBlur}
                                           errors={errors}
                                           touched={touched}/>
                            <BtnBooking isSubmitting={isSubmitting}/>
                        </Form>
                    </div>
                )
            }
        }
    </Formik>

);
export default Form8;