import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form3WithoutValidation from "./Form3WithoutValidation"


class ModalForm3WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    {/*<div className='formContainer'>*/}
                        <Form3WithoutValidation/>
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default ModalForm3WithoutValidation;