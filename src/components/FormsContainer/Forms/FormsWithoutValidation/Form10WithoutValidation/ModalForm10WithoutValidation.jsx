import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form10WithoutValidation from "./Form10WithoutValidation"

class ModalForm10WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form10WithoutValidation/>
                </div>
            </div>
        )
    }
}

export default ModalForm10WithoutValidation;