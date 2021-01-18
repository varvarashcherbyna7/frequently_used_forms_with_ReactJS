import React from "react"
import Form1 from "../Form1/Form1"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"

class ModalForm1 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><Form1/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm1;