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

const Form8WithoutValidation = () => {
                return (
                    <div className="form8">
                        <form className="containerInputsForm8" action='#'>
                            <LogoSide/>
                            <InputName/>
                            <div className="inputsContainerForm8">
                                <InputEmail/>
                                <InputPhone/>
                            </div>
                            <div className="inputsContainerForm8">
                                <InputAdultGuests/>
                                <InputChildrenGuests/>
                            </div>
                            <div className="inputsContainerForm8">
                                <InputCheckinDate/>
                                <InputCheckoutDate/>
                            </div>
                            <InputComments/>
                            <BtnBooking/>
                        </form>
                    </div>
                )
};
export default Form8WithoutValidation;