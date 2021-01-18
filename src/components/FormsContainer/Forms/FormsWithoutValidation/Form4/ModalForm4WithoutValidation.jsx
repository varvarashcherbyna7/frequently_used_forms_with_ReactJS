import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form4WithoutValidation from "./Form4WithoutValidation"

class ModalForm4WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form4WithoutValidation/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm4WithoutValidation;