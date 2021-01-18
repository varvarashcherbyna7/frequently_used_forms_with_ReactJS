import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form9WithoutValidation from "./Form9WithoutValidation"

class ModalForm9WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form9WithoutValidation/>
                </div>
            </div>
        )
    }
}

export default ModalForm9WithoutValidation;