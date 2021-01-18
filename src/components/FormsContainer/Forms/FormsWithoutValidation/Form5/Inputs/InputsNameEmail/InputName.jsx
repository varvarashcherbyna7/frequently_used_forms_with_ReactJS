import React from "react"
import "./InputsNameEmail_main.sass"

const InputName = (props) => {
    return (
            <div className="nameEmailInputContainer">
                <div className="nameEmailInputText">Name
                    <span className="nameEmailImgDiv">
                        <img src={props.starImg} alt="starImage"/>
                    </span>
                </div>
                <div className="nameEmailInputDiv">
                    <input type="text"
                           placeholder='Enter your name here'
                           name="name"
                    />
                </div>
            </div>
    )
};
export default InputName;