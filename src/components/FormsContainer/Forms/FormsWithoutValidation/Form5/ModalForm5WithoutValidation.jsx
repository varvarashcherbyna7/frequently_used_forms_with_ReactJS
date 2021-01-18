import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form5WithoutValidation from "./Form5WithoutValidation"

class ModalForm5WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form5WithoutValidation/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm5WithoutValidation;