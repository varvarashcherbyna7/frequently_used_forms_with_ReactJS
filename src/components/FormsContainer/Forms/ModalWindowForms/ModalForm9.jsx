import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form9 from "../Form9/Form9"

class ModalForm9 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form9/>
                </div>
            </div>
        )
    }
}

export default ModalForm9;