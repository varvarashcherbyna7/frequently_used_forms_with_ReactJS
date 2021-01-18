import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form6WithoutValidation from "./Form6WithoutValidation"

class ModalForm6WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form6WithoutValidation/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm6WithoutValidation;