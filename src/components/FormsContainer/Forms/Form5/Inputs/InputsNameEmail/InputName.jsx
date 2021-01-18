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
                           onChange={props.handleChange}
                           value={props.name}
                           onBlur={props.handleBlur}
                           className={props.errors.name && props.touched.name ? "nameEmailErrors" : null}
                    />
                    {props.errors.name && props.touched.name && (
                        <div className="nameEmailInputFeedback">{props.errors.name}</div>
                    )}
                </div>
            </div>
    )
};
export default InputName;