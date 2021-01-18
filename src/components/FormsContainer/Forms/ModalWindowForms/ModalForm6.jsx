import React from "react"
import "./ModalForm_main.sass"
import {NavLink} from "react-router-dom"
import FormComment from "../Form6/FormComment"

class ModalForm6 extends React.Component {

    render() {
        return (
            <div className='form'>
                <div className='formFixedContainer'>
                    <div className='formLinkDiv'>
                        <NavLink to={"/"}><i className="fas fa-times-circle"/></NavLink>
                    </div>
                    <div className='formContainer'><FormComment/></div>
                </div>
            </div>
        )
    }
}

export default ModalForm6;