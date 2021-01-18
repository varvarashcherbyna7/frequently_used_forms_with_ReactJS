import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form7WithoutValidation from "./Form7WithoutValidation"

class ModalForm7WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form7WithoutValidation/>
                </div>
            </div>
        )
    }
}

export default ModalForm7WithoutValidation;