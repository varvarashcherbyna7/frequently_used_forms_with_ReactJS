import React from "react"
import "./InputsNameEmail_main.sass"

const InputEmail = (props) => {
    return (
            <div className="nameEmailInputContainer">
                <div className="nameEmailInputText">Email
                    <span className="nameEmailImgDiv">
                        <img src={props.starImg} alt="starImage"/>
                    </span>
                </div>
                <div className="nameEmailInputDiv">
                    <input type="email"
                           name="email"
                           placeholder='Enter your email here'
                    />
                </div>
            </div>
    )
};
export default InputEmail;