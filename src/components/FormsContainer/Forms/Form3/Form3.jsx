import React from "react"
import "./Form3_main.sass"
import LogoText from "./LogoText/LogoText"
import FormRegistration from "./FormRegistration/FormRegistration"

const Form3 = () => {
    return (
            <div className="containerForm3">
                <div className="form3">
                    <LogoText/>
                    <div className="lineForm3"/>
                    <FormRegistration/>
                </div>
            </div>
    )
};

export default Form3;