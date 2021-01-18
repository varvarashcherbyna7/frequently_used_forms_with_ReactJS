import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form8WithoutValidation from "./Form8WithoutValidation"

class ModalForm8WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form8WithoutValidation/>
                </div>
            </div>
        )
    }
}

export default ModalForm8WithoutValidation;