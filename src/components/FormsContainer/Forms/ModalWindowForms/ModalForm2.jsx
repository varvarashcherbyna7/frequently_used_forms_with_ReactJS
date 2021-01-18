import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form2 from "../Form2/Form2"

class ModalForm2 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form2/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm2;