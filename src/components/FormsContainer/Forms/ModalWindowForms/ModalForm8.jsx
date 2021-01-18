import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form8 from "../Form8/Form8"

class ModalForm8 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form8/>
                </div>
            </div>
        )
    }
}

export default ModalForm8;