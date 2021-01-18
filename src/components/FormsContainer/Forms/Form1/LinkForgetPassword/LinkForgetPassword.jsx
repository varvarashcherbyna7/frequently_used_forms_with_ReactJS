import React from "react"
import "./LinkForgetPassword_main.sass"
import {NavLink} from "react-router-dom"

const LinkForgetPassword = (props) => {
    return (
        <div className='forgetPasswordDiv'>
            <NavLink to={'/'}> Forget password ? </NavLink>
        </div>
    )
};

export default LinkForgetPassword;