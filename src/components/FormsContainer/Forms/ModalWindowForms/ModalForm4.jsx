import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form4 from "../Form4/Form4"

class ModalForm4 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form4/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm4;