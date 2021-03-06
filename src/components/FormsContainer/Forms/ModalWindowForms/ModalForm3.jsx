import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import Form3 from "../Form3/Form3"

class ModalForm3 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    {/*<div className='formContainer'>*/}
                        <Form3/>
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default ModalForm3;