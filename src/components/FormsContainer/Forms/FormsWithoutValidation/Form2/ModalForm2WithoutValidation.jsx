import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form2WithoutValidation from "./Form2WithoutValidation"

class ModalForm2WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form2WithoutValidation/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm2WithoutValidation;