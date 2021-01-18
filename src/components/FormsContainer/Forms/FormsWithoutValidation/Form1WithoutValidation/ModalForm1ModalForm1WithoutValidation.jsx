import React from "react"
import Form1WithoutValidation from "./Form1WithoutValidation"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"

class ModalForm1WithoutValidation extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form1WithoutValidation/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm1WithoutValidation;