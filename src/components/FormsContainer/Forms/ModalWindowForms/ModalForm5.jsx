import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form5 from "../Form5/Form5"

class ModalForm5 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form5/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm5;