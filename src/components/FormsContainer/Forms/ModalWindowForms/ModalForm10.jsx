import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form10 from "../Form10/Form10"

class ModalForm10 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form10/>
                </div>
            </div>
        )
    }
}

export default ModalForm10;