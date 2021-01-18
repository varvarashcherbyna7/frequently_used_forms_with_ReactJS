import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form7 from "../Form7/Form7"

class ModalForm7 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <Form7/>
                </div>
            </div>
        )
    }
}

export default ModalForm7;